import React from 'react'
import Header from '../others/header'
import TaskListKPIs from '../others/TaskListKPIs'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen p-5'>

        <Header/>
        <TaskListKPIs/>
        <TaskList/>

    </div>
  )
}

export default EmployeeDashboard