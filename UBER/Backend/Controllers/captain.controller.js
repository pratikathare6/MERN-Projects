import captainModel from "../Models/captain.model.js";
import { createCaptain } from "../Services/captain.service.js";
import { validationResult } from "express-validator";
import BlacklistToken from "../Models/blacklistToken.models.js";

export const registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { fullName, email, password, vehicle } = req.body;

  const isCaptainAlreadyExists = await captainModel.findOne({ email });

  if (isCaptainAlreadyExists) {
    return res.status(400).json({
      message: "Captain already exists",
    });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await createCaptain({
    fullName,
    email,
    password: hashedPassword,
    vehicle,
  });

  const token = captain.generateAuthToken();

  res.status(200).json({
    token,
    captain,
  });
};

export const loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      message: "invalid email or passwrod",
    });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);

  return res.status(200).json({
    token,
    captain,
  });
};

export const profileCaptain = async (req, res, next) => {
  res.status(200).json(req.captain);
};

export const logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.Authorization.split(" ")[1];

  await BlacklistToken.create({ token });

  res.clearCookie("token");

  return res.status(200).json({
    message: "Logged out sucessfully",
  });
};
