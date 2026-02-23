import React from "react";
import { useState } from "react";
const login = ({handlelogin}) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function submithandler(e) {
    e.preventDefault();
     handlelogin(email,password);
    setemail("");
    setpassword("");
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl bg-emerald-50">
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col items-center justify-center gap-2 "
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            type="email"
            placeholder="Email"
            className="border-2 border-emerald-600 outline-none text-black rounded-full py-3 px-5 text-xl bg-transparent"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Password"
            className="border-2 border-emerald-600 outline-none text-black rounded-full py-3 px-5 text-xl bg-transparent"
          />

          <button className=" mt-4 bg-emerald-600 outline-none text-white rounded-full py-3 px-5 text-xl w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
