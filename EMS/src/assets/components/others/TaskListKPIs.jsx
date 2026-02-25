import React from "react";

const TaskListKPIs = ({data}) => {

  

  return (
    <div className="flex mt-10 gap-4 px-3">
      <div className="bg-blue-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">{data.taskcounts.active}</h2>
        <h3 className="text-2xl font-semibold">Active</h3>
      </div>
      <div className="bg-green-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">{data.taskcounts.completed}</h2>
        <h3 className="text-2xl font-semibold">Completed</h3>
      </div>
      <div className="bg-yellow-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">{data.taskcounts.failed}</h2>
        <h3 className="text-2xl font-semibold">Failed</h3>
      </div>
      <div className="bg-red-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">{data.taskcounts.newTask}</h2>
        <h3 className="text-2xl font-semibold">New Task</h3>
      </div>
       <div className="bg-gray-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">{data.taskcounts.total}</h2>
        <h3 className="text-2xl font-semibold">Total</h3>
      </div>
    </div>
  );
};

export default TaskListKPIs;
