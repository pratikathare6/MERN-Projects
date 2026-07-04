import React, { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [pannel, setpannel] = useState(false);
  const panelref = useRef(null);
  const panelcloseRef = useRef(null);
  const [vehiclepanel, setvehiclepanel] = useState(false);
  const vehiclePanelRef = useRef(null);

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
          <i
            onClick={() => {
              setvehiclepanel(false);
            }}
            className="ri-arrow-down-wide-line text-2xl font-bold"
          ></i>
          <h3 className="text-2xl font-semibold mb-5 ">Choose a Vehicle</h3>
          <div className="flex w-full p-3 items-center justify-between border-2 active:border-black  rounded-2xl mb-1 ">
            <img
              className="h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqQUsh0WsOlnhNxnpID_MfHSJwFeoOH0ZOqTCheHIRCMvn_Jk"
              alt="img"
            />

            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                UberGo{" "}
                <span>
                  <i className="ri-user-3-line"></i>4
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-medium text-lg text-gray-600">
                Affordable, compact rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹192.20</h2>
          </div>

          <div className="flex w-full p-3 items-center justify-between border-2 active:border-black  rounded-2xl mb-1">
            <img
              className="h-10"
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn"
              alt="img"
            />

            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                Auto{" "}
                <span>
                  <i className="ri-user-3-line"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-medium text-lg text-gray-600">
                Affordable, Auto rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹110.50</h2>
          </div>

          <div className="flex w-full p-3 items-center justify-between border-2 active:border-black  rounded-2xl">
            <img
              className="h-5"
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n"
              alt="img"
            />

            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                Moto{" "}
                <span>
                  <i className="ri-user-3-line"></i>1
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-medium text-lg text-gray-600">
                Affordable, motorcycle rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹65.20</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
