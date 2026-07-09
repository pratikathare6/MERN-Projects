import React from "react";
import { Link } from "react-router-dom";
import FinishRide from "../Components/FinishRide";
import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const CaptainRiding = () => {
  const [finishridepanel, setfinishridepanel] = useState(false);
  const finishridepanelref = useRef(null);

  useGSAP(
    function () {
      if (finishridepanel) {
        gsap.to(finishridepanelref.current, { y: 0 });
      } else {
        gsap.to(finishridepanelref.current, { y: "100%" });
      }
    },
    [finishridepanel],
  );

  return (
    <div className="h-screen">
      <div className="flex fixed p-3 top-0 items-center justify-between w-screen ">
        <img
          className="h-6 mt-2"
          src="https://www.pngall.com/wp-content/uploads/13/Uber-Logo-PNG-File.png"
          alt="img"
        />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white justify-between rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map.img"
        />
      </div>

      <div className="h-1/5 p-4 bg-yellow-400 flex items-center justify-between"
      onClick={()=>{setfinishridepanel(true)}}
      >
        <i className="ri-arrow-down-wide-line text-2xl font-bold"></i>

        <h4 className="font-semibold text-center text-2xl">4 Km Away</h4>
        <button className="border  text-center font-medium p-3 rounded-lg text-white bg-green-700 active:scale-95">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishridepanelref}
        className="fixed w-full z-10 h-[80%] bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishRide setfinishridepanel={setfinishridepanel}
          
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
