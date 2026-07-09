import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white items-center justify-center rounded-full'>
            <i className=" text-lg font-medium ri-home-2-line"></i>
        </Link>
       <div className='h-1/2'>
           <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map.img"
        />
       </div>
       <div className='h-1/2 p-4'>

          
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
            <button  className='mt-5 border w-full font-medium p-3 rounded-lg text-white bg-black active:scale-95'>Make a Payment</button>


       </div>
    </div>
  )
}

export default Riding