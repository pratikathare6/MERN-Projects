import React from 'react'

const TaskList = () => {
  return (
    <div  id='Tasklist' className=' mt-10 h-[45%] flex items-center justify-start gap-2 flex-nowrap overflow-scroll'>
 
            <div className='bg-red-200 h-60 w-75 rounded-xl mx-2 shrink-0 '>
                    
                    <div className='flex justify-between p-4 items-center'>
                        <h2 className='bg-red-400 px-2 py-1 rounded-xl'>High</h2>
                        <h3>23 Feb 2025</h3>
                    </div>
                    <h2 className='mt-2 p-2 text-xl font-semibold'>Make a react app</h2>
                    <p className='mt-1 p-1'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            
     


    </div>
  )
}

export default TaskList