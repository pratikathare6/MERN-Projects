import userModel from "../Models/user.model.js";
import { validationResult } from "express-validator";
import { createUser } from "../Services/user.service.js";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { fullname, email, password } = req.body;

  console.log({ fullname, email, password });

  const hashedPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(200).json({
    token,
    user,
  });
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const isUser = await userModel.findOne({ email }).select("+password");

  if (!isUser) {
    return res.status(401).json({
      message: "Invalid email or Password",
    });
  }

  const isMatch = await isUser.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      messgae: "Invalid email or password",
    });
  }

  const token = isUser.generateAuthToken();

  res.status(200).json({
    token,
    isUser,
  });
};
