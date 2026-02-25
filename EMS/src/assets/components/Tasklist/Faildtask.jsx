import React from 'react'

const Faildtask = ({data}) => {
  return (
      <div
 
      className="flex shrink-0 h-full w-75 p-5 rounded-xl"
    >
      <div className="bg-red-200 h-60 w-75 rounded-xl mx-2 shrink-0 ">
        <div className="flex justify-between p-4 items-center">
          <h2 className="bg-red-400 px-2 py-1 rounded-xl">{data.category}</h2>
          <h3>{data.date}</h3>
        </div>
        <h2 className="mt-2 p-2 text-xl font-semibold">{data.title}</h2>
        <p className="mt-1 p-1">{data.description}</p>

        <div className="flex justify-center p-2 mt-auto">
          <button className="border border-gray-200 active:scale-95  px-1 py-1 bg-red-400 rounded w-full">
            Failed
          </button>
         
        </div>
      </div>
    </div>
  )
}

export default Faildtask