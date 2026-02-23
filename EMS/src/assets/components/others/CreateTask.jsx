import React from "react";

const CreateTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-7">
      <form className="flex flex-wrap w-full justify-between items-start">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Task Title"
              className="text-sm py-1 px-2 outline-none bg-transparent border  border-gray-400 text-white w-full  mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="text"
              placeholder="Date Assigned"
              className="text-sm py-1 px-2 outline-none bg-transparent border border-gray-400  text-white w-full mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assigned to</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="text-sm py-1 px-2 outline-none bg-transparent border border-gray-400  text-white w-full mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="Design Dev Test etc"
              className="text-sm py-1 px-2 outline-none bg-transparent border border-gray-400  text-white w-full mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            className="col-30 row-20 w-full h-44 text-sm py-2 px-4  rounded bg-transparent text-white border border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-3 rounded mt-2 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
