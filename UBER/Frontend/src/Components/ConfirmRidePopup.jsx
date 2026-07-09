import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ConfirmRidePopup = (props) => {
  const navigate = useNavigate();
  const [otp, setotp] = useState("");

  const submithandler = (e) => {
    e.preventDefault();

    navigate('/captain-riding')
    
    console.log(otp);
    setotp("");
  };

  return (
    <div>
      <i
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
          props.setridePopupPanel(false);
        }}
        className="ri-arrow-down-wide-line text-2xl font-bold"
      ></i>
      <h3 className="text-2xl font-semibold mb-5 ">
        Confirm this ride to start
      </h3>
      <div className="flex items-center justify-between mt-5 mb-3 bg-yellow-400 rounded p-3">
        <div className=" flex items-center justify-between gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://www.ait.org.tw/wp-content/uploads/sites/68/2023/07/image006-1.jpg"
            alt="img"
          />
          <h2 className="text-xl font-medium">John Dow</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>

      <div className="flex justify-between items-center flex-col">
        <div className="w-full flex flex-col gap-5">
          <div className="flex gap-5 items-center  border-b-2 border-gray-100">
            <i className=" text-lg ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">sa veton, New York</p>
            </div>
          </div>

          <div className="flex gap-5 items-center border-b-2 border-gray-100">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">sa veton, New York</p>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-end mb-3">
            <i className="text-2xl ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">562.00</h3>
            </div>
          </div>
        </div>

        <div className=" mt-8">
          <form
            className="flex flex-col w-60"
            onSubmit={(e) => {
              submithandler(e);
            }}
          >
            <input
              type="number"
              className="border font-mono rounded-sm text-center p-3 border-gray-300"
              placeholder="OTP"
              value={otp}
              onChange={(e) => {
                setotp(e.target.value);
              }}
            />

            <button
              type="submit"
              className="mt-5 border w-full text-center font-medium p-3 rounded-lg text-white bg-black active:scale-95"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setridePopupPanel(false);
              }}
              className="mt-5   w-full font-medium p-3 rounded-lg text-white bg-red-500 active:scale-95"
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
