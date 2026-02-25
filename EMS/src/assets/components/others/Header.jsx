import React from "react";
import { useState } from "react";
const Header = (props) => {
  // const [username, setusername] = useState('')
  // if(!data){

  //     setusername('Admin')
  // }else{

  //     setusername(data.firstname)
  // }

  const logoutuser = () => {
    localStorage.setItem("loggedInUser", "");
    // console.log('chnageuser',props.changeuser)
    props.changeuser("");
  };

  return (
    <div className="flex justify-between p-10 items-end bg-[#1c1c1c]">
      <h1 className="font-medium text-2xl text-white">
        Hello <br />{" "}
        <span className="font-semibold text-white text-3xl">username 👋</span>
      </h1>
      <button
        className="bg-red-500 px-4 py-3 rounded-sm text-white text-lg font-medium"
        onClick={logoutuser}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
