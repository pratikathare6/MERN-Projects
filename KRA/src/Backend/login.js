import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://pratik123:UsPuhxzbNIhe17zz@cluster0.1aizdpc.mongodb.net/LoginDatabase");

const userschema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userschema , 'User');

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
 return res.json({
    msg: "user not found",
    success: false
  });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
  return res.json({
    msg: "invalid password",
    success: false
  });

  return res.json({
    msg: "login success",
    user: User,
    success: true
  });   
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedpassword = await bcrypt.hash(password, 10);

  const newuser = new User({ email, password: hashedpassword });

  await newuser.save();

  res.json({
    msg: "user registered successfully",
    success: true,
     user: User,
      // Add these for debugging
      savedIn: {
        database: mongoose.connection.db.databaseName,
        collection: User.collection.name
      }
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
