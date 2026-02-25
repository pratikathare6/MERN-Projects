import React from 'react'
import Header from '../others/header'
import TaskListKPIs from '../others/TaskListKPIs'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {

   

  return (
    <div className='bg-[#1c1c1c] h-screen p-5'>

        <Header changeuser={props.changeuser} data={props.data}/>
        <TaskListKPIs data={props.data}/>
        <TaskList data={props.data}/>

    </div>
  )
}

export default EmployeeDashboard