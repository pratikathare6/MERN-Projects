import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen text-black flex flex-col justify-between pt-5'>
            <img className='w-20 ml-8' src="https://www.pngall.com/wp-content/uploads/13/Uber-Logo-PNG-File.png" alt="" />
            <div className='bg-white py-5 px-10 pb-7'>
                <h2 className='font-bold text-2xl text-center'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full px-5 py-5 mt-5 bg-black text-white rounded'>Continue</Link>
            </div>


        </div>


    </div>
  )
}

export default Home