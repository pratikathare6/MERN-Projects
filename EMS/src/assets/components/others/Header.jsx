import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-10 items-end bg-[#1c1c1c]">
      <h1 className="font-medium text-2xl text-white">
        Hello <br /> <span className="font-semibold text-white text-3xl">Pratik 👋</span>
      </h1>
      <button className="bg-red-500 px-4 py-3 rounded-sm text-white text-lg font-medium">
        Logout
      </button>
    </div>
  );
};

export default Header;
