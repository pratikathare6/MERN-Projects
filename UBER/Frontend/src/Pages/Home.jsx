import React, { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import "remixicon/fonts/remixicon.css";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";

const Home = () => {
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [pannel, setpannel] = useState(false);
  const panelref = useRef(null);
  const panelcloseRef = useRef(null);
  const [vehiclepanel, setvehiclepanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const ConfirmRidePanelRef = useRef(null);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
  const LookingForDriverRef = useRef(null);
  const [LookingForDrivers, setLookingForDrivers] = useState(false);
  const WaitingForDriverRef = useRef(null);
  const [WaitingForDrivers, setWaitingForDrivers] = useState(false);


  const submithandler = (e) => {
    e.preventDefault();
    console.log(from);
    console.log(to);
  };

  useGSAP(() => {
    if (pannel) {
      gsap.to(panelref.current, {
        height: "70%",
      });
      gsap.to(panelcloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelref.current, {
        height: "0%",
      });
      gsap.to(panelcloseRef.current, {
        opacity: 0,
      });
    }
  }, [pannel]);

  useGSAP(
    function () {
      if (vehiclepanel) {
        gsap.to(vehiclePanelRef.current, {
          y: 0,
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          y: "100%",
        });
      }
    },
    [vehiclepanel],
  );

  useGSAP(
    function () {
      if (ConfirmRidePanel) {
        gsap.to(ConfirmRidePanelRef.current, {
          y: 0,
        });
      } else {
        gsap.to(ConfirmRidePanelRef.current, {
          y: "100%",
        });
      }
    },
    [ConfirmRidePanel],
  );

    useGSAP(
    function () {
      if (LookingForDrivers) {
        gsap.to(LookingForDriverRef.current, {
          y: 0,
        });
      } else {
        gsap.to(LookingForDriverRef.current, {
          y: "100%",
        });
      }
    },
    [LookingForDrivers],
  );

    useGSAP(
    function () {
      if (WaitingForDrivers) {
        gsap.to(WaitingForDriverRef.current, {
          y: 0,
        });
      } else {
        gsap.to(WaitingForDriverRef.current, {
          y: "100%",
        });
      }
    },
    [WaitingForDrivers],
  );

  return (
    <div className="w-full  h-screen relative overflow-hidden">
      <img
        className="w-15 absolute "
        src="https://www.pngall.com/wp-content/uploads/13/Uber-Logo-PNG-File.png"
        alt=""
      />

      <div className="h-screen w-full absolute inset-0 object-cover">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map.img"
        />
      </div>

      <div className=" h-screen flex flex-col justify-end absolute bottom-0 w-full rounded-t-3xl ">
        <div className="h-[30%] p-5 bg-white relative ">
          <h5
            className="absolute top-3 right-3 opacity-0"
            ref={panelcloseRef}
            onClick={() => {
              setpannel(false);
            }}
          >
            <i className="ri-arrow-down-wide-line text-2xl font-bold"></i>
          </h5>

          <h4 className="text-2xl text-center font-bold">Find a Trip</h4>
          <form
            className="flex flex-col gap-4 mt-2"
            onSubmit={(e) => {
              submithandler(e);
            }}
          >
            <div className="line absolute h-18 w-1 left-8 bg-black top-18 rounded-full"></div>
            <input
              className="h-10 border rounded p-2 bg-[#eee] text-center"
              type="text"
              placeholder="Add a pick up point"
              onClick={() => {
                setpannel(true);
              }}
              value={from}
              onChange={(e) => {
                setfrom(e.target.value);
              }}
            />
            <input
              className="h-10 border rounded p-2 bg-[#eee] text-center"
              type="text"
              placeholder="Add a destination"
              onClick={() => {
                setpannel(true);
              }}
              value={to}
              onChange={(e) => {
                setto(e.target.value);
              }}
            />
          </form>
        </div>
        <div ref={panelref} className="h-[70%] bg-white">
          <LocationSearchPanel
            setpannel={setpannel}
            setvehiclepanel={setvehiclepanel}
          />
        </div>

        <div
          ref={vehiclePanelRef}
          className="fixed z-10 w-full bottom-0 px-3 py-6 bg-white translate-y-full "
        >
          <VehiclePanel
            setConfirmRidePanel={setConfirmRidePanel}
            setvehiclepanel={setvehiclepanel}
          />
        </div>

        <div
          ref={ConfirmRidePanelRef}
          className="fixed z-10 w-full bottom-0 px-3 py-6 bg-white translate-y-full "
        >
          <ConfirmRide setLookingForDrivers={setLookingForDrivers} setConfirmRidePanel={setConfirmRidePanel} />
        </div>

        <div 
        ref={LookingForDriverRef}
        className="fixed z-10 w-full bottom-0 px-3 py-6 bg-white translate-y-full ">
          <LookingForDriver setLookingForDrivers={setLookingForDrivers} />
        </div>

           <div 
         ref={WaitingForDriverRef}
        className="fixed z-10 w-full bottom-0 px-3 py-6 bg-white  ">
          <WaitingForDriver  setWaitingForDrivers={setWaitingForDrivers}/>
        </div>
     

      </div>
    </div>
  );
};

export default Home;
