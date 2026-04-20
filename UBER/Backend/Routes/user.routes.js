import express from "express";
const router = express.Router();
import {body,validationResult} from "express-validator";
import {registerUser,loginUser,getUserProfile,logoutUser} from "../Controllers/user.controller.js";
import { authUserMiddleware } from "../Middlewares/Auth.middleware.js";

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


router.post("/login",[

    body("email").isEmail().withMessage('Invalid Email'),
    body("password").isLength({min:6}).withMessage("Invalid Password")

],loginUser)

router.get('/profile',authUserMiddleware,getUserProfile)

router.get('/logout',authUserMiddleware,logoutUser)


export default router;
