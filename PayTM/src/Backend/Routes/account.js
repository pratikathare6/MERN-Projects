import express from 'express';

import authmiddleware from '../middleware.js';

import Account from '../db.js';

import mongoose from 'mongoose';

const router =  express.Router();

router.get('/balance',authmiddleware, async (req,res)=>{

    const account = await Account.findOne({
      
        userId: req.userId
    })

    res.json({
        balance: account.balance
    })


});

router.post('/transfer',authmiddleware, async(req,res)=>{

    const session = await mongoose.startSession();

    session.startTransaction();

    const {amount, to } = req.body;

    //fetch the accounts within the transaction 

    const account = await Account.findOne({userId : req.userId}.session(session))

    if(!account || account.balance < amount){

        await session.abortTransaction();

        return res.status(400).json({
            message: 'insufficient balance'
        });

    }

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount){

        await session.abortTransaction();

        return res.status(404).json({

            messgae: 'Account not found'
        })
    }


    //perfom the transfer 

    await Account.updateOne({userId: req.userId}, {$inc: {balance: -amount}}).session(session);
    await Account.updateOne({userId: to},{$inc : {balance: amount }}).session(session);

    //commit the transaction    

    await session.commitTransaction();

    res.json({

        messgae: 'transfer sucessfull'
    });
});

export default router;
