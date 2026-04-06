import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

dotenv.config({
  path: path.join(process.cwd(), "./../.env"), // Root .env
});
console.log('DB Connected...')
mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("UserAuths", userSchema);

export default userModel;
