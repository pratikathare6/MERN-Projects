import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
import connectToDB from './DB/db.js';
import userRouter from './Routes/user.routes.js'

connectToDB();

app.get('/',(req,res)=>{

    res.status(200).json({

        msg: 'Hello form backend'
    })
})

app.use('/users',userRouter)

export default app