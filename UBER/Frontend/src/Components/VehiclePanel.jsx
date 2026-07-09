import React from 'react'

const VehiclePanel = (props) => {


  return (
    <div> 

         <i
            onClick={() => {
              props.setvehiclepanel(false);
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

            <div 
             onClick={()=>{props.setConfirmRidePanel(true)}}
            className=" w-1/2">
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

            <div 
             onClick={()=>{props.setConfirmRidePanel(true)}}
            className=" w-1/2">
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

            <div 
            onClick={()=>{props.setConfirmRidePanel(true)}}
            className=" w-1/2">
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
  )
}

export default VehiclePanel