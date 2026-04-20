import jwt from 'jsonwebtoken';
import userModel from '../Models/user.model.js';
import bcrypt from 'bcrypt';



export const authUserMiddleware = async(req,res,next)=>{


    const token = req.cookies.token || req.headers.Authorization?.split(' ')[1];

    if(!token){

        return res.status(401).json({

            message: 'Unauthorized Request'
        })
    }

    const isBlacklisted = await userModel.findOne({token: token})

    if(isBlacklisted){

       return res.status(401).json({

            message: 'Unauthorized token'
        })
    }

    try{

           const decoded =  jwt.verify(token,process.env.JWT_SECRET)
           const user = await userModel.findOne({_id:decoded._id});

           req.user = user;

           return next();

    }   
    catch(err){

        console.error('Authentication Error:', err); 
        return res.status(401).json({

            message: 'Unauthorized Attempt'
        })
    }
} 