import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userdata,setuserdata] = useContext(AuthContext)

  const [tasktitle, settasktitle] = useState("");
  const [date, setdate] = useState("");
  const [assignedto, setassignedto] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const [task, setTask] = useState({});

  const submithandler = (e) => {
    e.preventDefault();

   const newTask ={
      tasktitle,
      date,
      assignedto,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };


    const updatedusers = userdata.map((emp)=>{

      if(emp.firstname == assignedto){
        return {

          ...emp,tasks: [...emp.tasks,newTask]
        }
      }

        return emp;
    });

    setuserdata(updatedusers);
    
    settasktitle("");
    setdate("");
    setassignedto("");
    setcategory("");
    setdescription("");
  };

   

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-7">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex flex-wrap w-full justify-between items-start"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={tasktitle}
              onChange={(e) => {
                settasktitle(e.target.value);
              }}
              type="text"
              placeholder="Task Title"
              className="text-sm py-1 px-2 outline-none bg-transparent border  border-gray-400 text-white w-full  mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setdate(e.target.value);
              }}
              className="text-sm py-1 px-2 outline-none bg-transparent border border-gray-400  text-white w-full mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assigned to</h3>
            <input
              type="text"
              value={assignedto}
              onChange={(e) => {
                setassignedto(e.target.value);
              }}
              placeholder="Employee Name"
              className="text-sm py-1 px-2 outline-none bg-transparent border border-gray-400  text-white w-full mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              placeholder="Design Dev Test etc"
              className="text-sm py-1 px-2 outline-none bg-transparent border border-gray-400  text-white w-full mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            name=""
            id=""
            className="col-30 row-20 w-full h-44 text-sm py-2 px-4  rounded bg-transparent text-white border border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-3 rounded mt-2 w-full active:scale-95">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
