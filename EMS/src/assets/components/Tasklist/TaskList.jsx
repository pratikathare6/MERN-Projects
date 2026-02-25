import React from "react";
import Accepttask from "./Accepttask";
import Newtask from "./Newtask";
import Completetask from "./Completetask";
import Faildtask from "./Faildtask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="Tasklist"
      className="flex h-[50%]  items-center justify-start gap-2 flex-nowrap overflow-x-auto "
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <Accepttask key={idx} data={elem}/>;
        }
        if (elem.newTask) {
          return <Newtask key={idx} data={elem}/>;
        }

        if (elem.completed) {
          return <Completetask key={idx} data={elem}/>;
        }

        if (elem.failed) {
          return <Faildtask key={idx} data={elem}/>;
        }
      })}
    </div>
  );
};

export default TaskList;
