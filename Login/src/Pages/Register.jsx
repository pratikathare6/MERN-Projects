import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleregister = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        setname("");
        setemail("");
        setpassword("");
        navigate("/login");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        alert("User already registered please try login instead");
      } else if (err.response.status === 400) {
        alert("Name Email Password is required");
      } else {
        alert("someting went wrong");
      }
    }
  };

  return (
    <div className="w-full h-screen flex justify-center text-black items-center bg-linear-to-r from-neutral-300 to-stone-400">
      <div className="   shadow-[21px_-4px_26px_-2px_rgba(0,0,0,0.1)] p-30 ">
        <form
          onSubmit={handleregister}
          className="= flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            id=""
            placeholder="Name"
            className="border  px-8 py-3 rounded"
          />
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
            value="Register"
            name=""
            id=""
            onClick={handleregister}
            className=" p-2 rounded-md px-8 active:scale-95 bg-black text-white"
          />
        </form>
        <div className="flex flex-col items-center mt-3 gap-4">
          <span>Or</span>

          <span className="bg-black px-4 py-3 rounded-md text-white ">
            <button
              onClick={() => navigate("/login")}
              className="active:scale-95"
            >
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
