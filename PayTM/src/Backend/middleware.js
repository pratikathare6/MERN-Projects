import JWT_SECRET from './config.js';

import jwt from 'jsonwebtoken';

const authmiddleware = (req,res,next)=>{

    const authheader = req.headers.authorization;

    if(!authheader || !authheader.startsWith('Bearer ')){

        res.status(401).json({})
    }

    const token = authheader.split(' ')[1];

    try {

        const decoded = jwt.verify(token,JWT_SECRET);

        req.userId = decoded.userId;

        next();

    }
    catch(err){

        return res.status(403).json({})
    }
};

export default authmiddleware;

