import express from "express";
import cors from "cors";
import userModel from "./../Database/userAuthModule.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParse from 'cookie-parser';
const app = express();
const secreat = process.env.JWTSECREAT;

app.use(cookieParse());
app.use(express.json());
app.use(cors( { origin: "http://localhost:5173",credentials: true}) );

const authmiddleware = (req, res, next) => {
  try {
    const cookietoken = req.cookies.token;
    if (!cookietoken) {
      return res.status(401).json({
        msg: "You are not logged in",
      });
    }

    const verified = jwt.verify(req.cookies.token, secreat);
    req.user = verified;

    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid Token",
    });
  }
};

app.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  console.log(name, email, password);

  try {

        if(!name || !email || !password){

            return res.status(400).json({
                msg: 'Name Email Password required'
            })

        }

    let isalreadythere = await userModel.findOne({ email });
    if (isalreadythere) {
      return res.status(401).json({
        msg: "User is already registered",
      });
    } else {
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          let createduser = await userModel.create({
            name,
            email,
            password: hash,
          });
          console.log("created user");

          res.status(200).json({ msg: "user created", createduser });
        });
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    //validate inputs
    if (!email || !password) {
      return res.status(400).json({
        msg: "Email and Password required",
      });
    }

    //find user

    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        msg: "Invalid Creds",
      });
    }

    //verify password

     bcrypt.compare(password, user.password,(err,result)=>{

      if (result == true) {
      const token = jwt.sign({userId:user._id,email:user.email}, secreat);

      res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return res.status(200).json({
      msg: "Login Successful",
    });
    }else{

        return res.status(401).json({
            msg: 'invalid creds'
        })
    } 

    });

   
  } catch (err) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});


app.post('/logout',authmiddleware,(req,res)=>{

    res.clearCookie("token", {
  httpOnly: true,
  sameSite: "lax",
  secure: false
    });

    return res.status(200).json({

        msg: 'Logged out sucessfully'
    })

})


app.get('/home',authmiddleware,(req,res)=>{

        return res.status(200).json({

            msg: "welcome to home",
            user:req.user,

        })
})

app.listen(3000);


 