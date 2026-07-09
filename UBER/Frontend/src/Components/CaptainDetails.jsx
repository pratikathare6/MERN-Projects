import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center ">
        <div className="flex justify-between w-full mb-1">
          <div className="flex  justify-start gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEg-tuVoFIM9U-nuh8XxxD5l7J6SNf6Mo1E1naaJDq0DymwowHHfSyFEQ&s=10"
              alt=""
            />
            <h4 className="text-lg font-medium">John Dow</h4>
          </div>
          <div>
            <h4 className="text-lg font-medium">₹195.2</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex justify-evenly w-full mt-10 bg-gray-100 p-1 rounded-xl">
          <div>
            <i className="text-3xl mb-2 font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-dashboard-3-fill"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-fill"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
