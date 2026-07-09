import React from 'react'

const WaitingForDriver = (props) => {
  return (
        <div>
      <i
            onClick={() => {
              props.setWaitingForDrivers(false);
            }}
            className="ri-arrow-down-wide-line text-2xl font-bold"
          ></i>
          <div className='flex items-center justify-between mb-5'>
               <img 
            className='h-20'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqQUsh0WsOlnhNxnpID_MfHSJwFeoOH0ZOqTCheHIRCMvn_Jk" alt="img" />
            <div className='text-right'>
              <h2 className='text-lg font-medium -mb-1 -mt-1'>Pratik</h2>
              <h4 className='text-xl font-semibold'>MH15 CC 2020</h4>
              <p className='text-sm text-gray-600 '>Maruti Suzuki Swift</p>
            </div>
          </div>
            <div className='flex justify-between items-center flex-col'>
          
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

            
            </div>

    </div>
  )
}

export default WaitingForDriver