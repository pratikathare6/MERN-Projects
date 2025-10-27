import express from 'express';
import zod from 'zod';
import  JWT_SECRET  from '../config.js';
import models from '../db.js';
const {User,Account}  = models;
 
import authmiddleware from '../middleware.js';
import jwt from 'jsonwebtoken';
const router = express.Router();


    const signupschema = zod.object({

        username : zod.string(),
        password : zod.string(),
        firstname : zod.string(),
        lastname : zod.string()
    })

    router.post('/signup',async (req,res)=>{

        const body = req.body;

        const {success} = signupschema.safeParse(req.body);

        if(!success){

            return res.json({

                message: 'Incorrect input data'
            })
        }



        const existinguser = await User.findOne({

            username: req.body.username
            
        })

        if(existinguser){
        
            return res.status(411).json({

                messgae: 'Username already taken'
            })
        }


        const user = await User.create({

            username: req.body.username,
            password: req.body.passoword,
            firstname: req.body.fristname,
            lastname: req.body.lastname,
        })

        const userId = user._id;

        await Account.create({
            userId,
            balance: 1+ Math.random()*1000
        })

        const token = jwt.sign({

            userId: user._id
        }, JWT_SECRET);


        res.json({

            messgae: 'User created sucessfully',
            token: token

        })
    })


 
        const signinbody = zod.object({

            username: zod.string().email(),
            password: zod.string()

        })





        

        router.post('/signin', async(req,res)=>{

            const {success} = signinbody.safeParse(req.body)

            if(!success){

                return res.status(411).json({

                    message: 'Email already taken / incorrect inputs'
                })

            }

            const user = await User.findOne({

                username: req.body.username,
                password: req.body.password
            });

            if(user){

                const token = jwt.sign({

                    userId: user._id
                }, JWT_SECRET);

                res.json({

                    token: token
                })
                return;
            }

            res.status(401).json({
                message: 'error while login'
            })
        })

        const updatebody = zod.object({

            password: zod.string().optional(),
            firstname: zod.string().optional(),
            lastname: zod.string().optional()
        })

        router.put('/', authmiddleware, async(req,res)=>{

            const {success} = updatebody.safeParse(req.body)

            if(!success){

                res.status(411).json({

                    messgae: 'Error while updating the information'
                })

            }

            await User.updateOne(req.body,{

                id: req.userId

            })

            res.json({

                message: 'updated sucessfully'
            })

        })

        router.get('/bulk', async(req,res)=>{

            const filter = req.query.filter || "";
        

        const users = await User.find({
            $or: [
                {firstname: {"$regex" : filter }},
                {lastname: {"$regex": filter }}
                ]
         })


         res.json({

                users: users.map(user =>({

                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    _id: user._id
                }))

         })
        })


    


export default router;

