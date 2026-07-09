import React from 'react'
import LookingForDriver from './LookingForDriver';

const ConfirmRide = (props) => {
  return (
    <div>
      <i
            onClick={() => {
              props.setConfirmRidePanel(false);
            }}
            className="ri-arrow-down-wide-line text-2xl font-bold"
          ></i>
          <h3 className="text-2xl font-semibold mb-5 ">Confirm your Ride</h3>

            <div className='flex justify-between items-center flex-col'>
          <img 
            className='h-20'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqQUsh0WsOlnhNxnpID_MfHSJwFeoOH0ZOqTCheHIRCMvn_Jk" alt="img" />

            <div className='w-full flex flex-col gap-5'>

              <div className='flex gap-5 items-center  border-b-2 border-gray-100'>
                <i className=" text-lg ri-map-pin-2-line"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>sa veton, New York</p>
                </div>
              </div>

              <div className='flex gap-5 items-center border-b-2 border-gray-100'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>sa veton, New York</p>
                </div>
              </div>
              <div className='flex gap-3 items-center justify-end mb-3'>
              <i className="text-2xl ri-money-rupee-circle-line"></i>
                <div>
                  <h3 className='text-lg font-medium'>562.00</h3>
                
                </div>
              </div>

            </div>

            <button 
            onClick={()=>{props.setLookingForDrivers(true)}}
            className='mt-5 border w-full font-medium p-3 rounded-lg text-white bg-black active:scale-95'>Confirm</button>
            </div>

    </div>
  )
}

export default ConfirmRide