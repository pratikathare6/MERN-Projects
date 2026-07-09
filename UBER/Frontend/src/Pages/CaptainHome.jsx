import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../Components/CaptainDetails";
import RidePopUp from "../Components/RidePopUp";
import ConfirmRidePopup from "../Components/ConfirmRidePopup"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef } from "react";

const CaptainHome = () => {
  const [ridePopupPanel, setridePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);
  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ConfirmRidePopupPanelRef = useRef(null)

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, { y: 0 });
      } else {
        gsap.to(ridePopupPanelRef.current, { y: "100%" });
      }
    },
    [ridePopupPanel],
  );

    useGSAP(
    function () {
      if (ConfirmRidePopupPanel) {
        gsap.to(ConfirmRidePopupPanelRef.current, { y: 0 });
      } else {
        gsap.to(ConfirmRidePopupPanelRef.current, { y: "100%" });
      }
    },
    [ConfirmRidePopupPanel],
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map.img"
        />
      </div>

      <div className="h-2/5 p-4 ">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <RidePopUp setridePopupPanel={setridePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>


      <div
        ref={ConfirmRidePopupPanelRef}
        className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-10 pt-12"
      > 
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setridePopupPanel={setridePopupPanel} />
      </div>

    </div>
  );
};

export default CaptainHome;
