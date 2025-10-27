import express from 'express';
import userrouter from './user.js';
import accountrouter from './account.js';

const router = express.Router();


router.use('/user', userrouter);

router.use('/account', accountrouter);


export default router;





