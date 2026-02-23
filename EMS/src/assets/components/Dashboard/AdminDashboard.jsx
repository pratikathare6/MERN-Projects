import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div>
        <Header/>

        <CreateTask/>
        <AllTask/>

    </div>
  )
}

export default AdminDashboard