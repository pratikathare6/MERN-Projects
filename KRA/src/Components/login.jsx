import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
    
  const handlelogin = async (e) => {
    e.preventDefault();

        if(!email.trim() || !password.trim()){

            setmessage("email and passowrd are required");
            return;
        }

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      setmessage(res.data.msg || "Login success");
      if(res.data.success){

        localStorage.setItem("isLoggedIn", 'true');
        localStorage.setItem("useremail",email);

        setTimeout(()=>{

            navigate('/Revenuecard');
            

        },1000);
        

      }
    } catch (err) {
      setmessage(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <form
        onSubmit={handlelogin}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email input */}
        <div className="mb-4">
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password input + toggle */}
        <div className="mb-4 relative">
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* show hide button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800"
          >
            {showPassword ? (
              // Hide icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 1 12 4.5c4.136 0 7.681 2.336 9.49 5.723a10.454 10.454 0 0 1-1.929 2.414M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
              </svg>
            ) : (
              // Show icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.637 0 8.573 3.007 9.963 7.178.07.207.07.435 0 .642C20.577 16.49 16.64 19.5 12 19.5c-4.637 0-8.573-3.007-9.964-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>

        <button
            type = 'button'
            onClick={()=> navigate('/register')}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition mt-1"
        >Register</button>

        {/* Message output */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
