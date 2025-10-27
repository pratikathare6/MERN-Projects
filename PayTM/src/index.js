import express from 'express';
import cors from 'cors';
import router from'./Backend/Routes/index.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', router);
 


app.listen(3000, ()=>{

    console.log('server is running on port 3000');
})


