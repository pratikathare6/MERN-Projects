import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userdata,setuserdata] = useContext(AuthContext);
  console.log('userdata',userdata);

  return (
    <div id="alltask" className="bg-[#1c1c1c] p-5  mt-5  h-auto">
      <div className="bg-gray-400 mb-2  py-2 px-4 flex justify-between ">
        <h2 className="w-1/5 text-lg font-medium">Name</h2>
        <h2 className="w-1/5 text-lg font-medium">Active</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
        <h5 className="w-1/5 text-lg font-medium">Total</h5>
      </div>
      <div className=" h-[80%]">
        {userdata.map(function(elem,idx) {
          return (
            <div key={idx} className="border border-emerald-500 text-white mb-2  py-2 px-4 flex justify-between rounded">
              <h2 className="w-1/5 text-lg font-medium">{elem.firstname}</h2>
              <h3 className="w-1/5 text-lg font-medium">{elem.taskcounts.active}</h3>
              <h5 className="w-1/5 text-lg font-medium">{elem.taskcounts.completed}</h5>
              <h5 className="w-1/5 text-lg font-medium">{elem.taskcounts.newTask}</h5>
              <h5 className="w-1/5 text-lg font-medium">{elem.taskcounts.failed}</h5>
              <h5 className="w-1/5 text-lg font-medium">{elem.taskcounts.total}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
