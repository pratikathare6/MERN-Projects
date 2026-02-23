import { useContext, useState } from 'react'
import Login from '../src/assets/components/Auth/login'
import AdminDashboard from './assets/components/Dashboard/AdminDashboard'
import EmployeeDashboard from './assets/components/Dashboard/EmployeeDashboard'
import AuthContext from './assets/context/AuthProvider'
 
 const App = () => {

    const [user, setUser] = useState(null);

    const handlelogin = (email,password)=>{

        if(email == 'admin.admin@company.com' && password == 123){

            setUser('admin');
            console.log('this is admin');
        }
        else if(email == 'user.user@company.com' && password == 123){

            setUser('employee')
            console.log('this is employee')

        }else{

            alert('invalid Creds')
        }

    }

    const data = useContext(AuthContext);
    // console.log(data)

   return (
     <>

      {!user ?  <Login handlelogin = {handlelogin}/> : ''}

      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
     
     </>
   )
 }
 
 export default App