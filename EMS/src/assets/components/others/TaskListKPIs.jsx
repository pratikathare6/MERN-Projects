import React from "react";

const TaskListKPIs = () => {
  return (
    <div className="flex mt-10 gap-4 px-3">
      <div className="bg-blue-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">Task</h3>
      </div>
      <div className="bg-green-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">Task</h3>
      </div>
      <div className="bg-yellow-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">Task</h3>
      </div>
      <div className="bg-red-200 rounded-xl w-[40%] py-6 px-9">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-2xl font-semibold">Task</h3>
      </div>
    </div>
  );
};

export default TaskListKPIs;
