import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Logout = () => {
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/logout",
        {},
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);

      if (err.response?.status === 401) {
        alert("You are not logged in");
      } else {
        alert("something went wrong");
      }
    }
  };
  return (
    <div className="flex justify-end">
      <div>
        <button
          className="bg-red-400 px-3 py-2 m-10 rounded active:scale-95"
          onClick={handlelogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
