import captainModel from "../Models/captain.model.js";
import { createCaptain } from "../Services/captain.service.js";
import { validationResult } from "express-validator";

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
