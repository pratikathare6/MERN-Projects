
import mongoose from 'mongoose';

function connectToDB(){

    mongoose.connect(process.env.DBURI,console.log('DB Connected'))
    .catch(err=>console.log(err))

}

export default connectToDB;

