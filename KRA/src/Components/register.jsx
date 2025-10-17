import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { use } from "react";

export default function Register(){

   
    const [email,setemail] =useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");
    const [showpassword, setshowpassword] = useState(false);

    const navigate = useNavigate();

    const handleregister= async (e)=>{

            e.preventDefault();

            if(!email.trim() || !password.trim()){

                setmessage("email and passowrd are required");
                return;
            }

            try{

                const res = await axios.post("http://localhost:3000/register",{email,password});

                setmessage(res.data.msg);

                if(res.data.success){

                    setTimeout(()=>{
                            navigate('/');//redirect to login 

                    },1000)
                }

            }
            catch(err){

                setmessage(err.response?.data?.msg||"something went wrong");


            }

    };

   
    return(

    <div className="flex justify-center items-center bg-gray-400 h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        
        <form onSubmit={handleregister}>

        <h2 className="text-2xl font-bold text-center mb-2">Register</h2>

            <input type="email" text='email' placeholder='email'

                value={email}
                onChange={(e)=> setemail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            />

            <div className='mb-4 relative'>
            <input type={showpassword ? 'text' : 'password'} text='passowrd' placeholder='password'
                
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"


            />
            <button type="button"
                onClick={()=> setshowpassword(!showpassword)}

                className="absolute right-2 top-2 text-sm text-blue-500 focus:outline-none"

            >
                    {showpassword ? "Hide" : "Show"}
            </button>

            </div>

            <button type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >Register</button>

            {message && <p className="mt-4 text-center text-red-600">{message}</p>}
        </form>
        </div>
    </div>           





    );


}