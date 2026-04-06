import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        setemail("");
        setpassword("");
        navigate("/home");
      }
    } catch (err) {
      console.log(err);

      if (err.response?.status === 400) {
        alert("Email and Password is required");
      } else if (err.response?.status === 401) {
        alert("Invalid Credentails");
        setemail("");
        setpassword("");
      } else if (err.response?.status === 500) {
        alert("Internal Server Error");
      } else {
        alert("Someting went wrong");
      }
    }
  };

  return (
    <div className="w-full h-screen flex justify-center text-black items-center bg-linear-to-r from-neutral-300 to-stone-400">
      <div className="   shadow-[21px_-4px_26px_-2px_rgba(0,0,0,0.1)] p-30 ">
        <form
          onSubmit={handlelogin}
          className="= flex flex-col items-center gap-4"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            id=""
            placeholder="Email"
            className="border  px-8 py-3 rounded"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            id=""
            placeholder="Password"
            className="border  px-8 py-3  rounded"
          />
          <input
            type="submit"
            value="Login"
            name=""
            id=""
            className=" p-2 rounded-md px-8 active:scale-95 bg-black text-white"
          />
        </form>
        <div className="flex flex-col items-center mt-3 gap-4">
          <span>Or</span>

          <span className="bg-black px-4 py-3 rounded-md text-white ">
            <button
              onClick={() => navigate("/register")}
              className="active:scale-95"
            >
              Register
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
