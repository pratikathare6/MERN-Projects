import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";
import { useContext } from "react";
import axios from "axios";
const Userlogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { user, setuser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userdata = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userdata,
    );

    if (response.status === 200) {
      const data = response.data;

      localStorage.setItem("token", data.token);
      setuser(data.user);
      navigate("/home");
    }

    console.log(userdata);

    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-10"
          src="https://www.pngall.com/wp-content/uploads/13/Uber-Logo-PNG-File.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <h3 className="text-sm mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeee] rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <h3 className="text-sm mb-2 mt-1">Enter password</h3>
          <input
            required
            className="bg-[#eeee] rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="flex justify-center font-semibold text-white bg-black px-3 py-2 rounded w-full mt-5">
            Login
          </button>

          <p className="text-center mt-2">
            New here?{" "}
            <Link to="/Signup" className="text-blue-600">
              Create New Account
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/Captain-login"
          className="flex justify-center font-semibold text-white bg-[#10b461] px-3 py-2 rounded w-full mt-5"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default Userlogin;
