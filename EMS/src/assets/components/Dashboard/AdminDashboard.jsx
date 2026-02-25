import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div>
        <Header changeuser={props.changeuser}/>

        <CreateTask/>
        <AllTask/>

    </div>
  )
}

export default AdminDashboard