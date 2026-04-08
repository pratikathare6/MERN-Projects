import express from "express";
const router = express.Router();
import {body,validationResult} from "express-validator";
import {registerUser} from "../Controllers/user.controller.js";
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Fist name must be 3 charaters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  registerUser,
);

export default router;
