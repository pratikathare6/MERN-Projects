import mongoose from "mongoose";

mongoose.connect('mongodb+srv://pratik123:UsPuhxzbNIhe17zz@cluster0.1aizdpc.mongodb.net/PayTM');

const userschema = mongoose.Schema({

    username: {

        type: String,
        unique:[true,'username needs to be unique'],
        required:[true,'username is required'],
        trim: true,
        minLength: 3,
        maxLength:20
    },
    passowrd: {

        type: String,
        required:[true,'password is required'],
        minLength: [8,'password should be minimum 8 characters'],
        maxLength:30
    },
    firstname:{

        type: String,
        required:[true,'firstname is required'],

    },
    lastname:{
        
        type: String,
        required: [true,'lastname is required'],

    }
});

const User = mongoose.model('User', userschema);


const accountschema = new mongoose.Schema({

        userId: {

            type: mongoose.Schema.Types.ObjectId, //reference to usermodel
            ref: 'User',
            required: true
        },
        balance: {

            type: Number,
            required: true,
            default: 0
        }

})

       const Account = mongoose.model('Account', accountschema);


export default {User,Account};
