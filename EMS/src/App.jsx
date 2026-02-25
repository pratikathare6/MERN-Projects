import { useContext, useState, useEffect } from "react";
import Login from "../src/assets/components/Auth/login";
import AdminDashboard from "./assets/components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./assets/components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./assets/context/AuthProvider";

const App = () => {
  // const Authdata = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserdata, setloggedInUserdata] = useState(null);

  const [userdata, setuserdata] = useContext(AuthContext)

  useEffect(() => {
    
      const loggedInUser = localStorage.getItem('loggedInUser')

      if(loggedInUser){
        console.log("user logged in")

        const userdata = JSON.parse(loggedInUser);

         setUser(userdata.role)
         setloggedInUserdata(userdata.data)

      }
 
  }, [])
  

  const handlelogin = (email, password) => {
    if (email == "admin.admin@company.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userdata) {
      const employee = userdata.find(
        (e) => e.email === email && e.password === password,
      );
      if (employee) {
        setloggedInUserdata(employee);
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" ,data:employee }),
        );
      }
    } else {
      alert("invalid Creds");
    }
  };

 

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}

      {user == "admin" ? (<AdminDashboard changeuser={setUser} />) : user == 'employee'? (<EmployeeDashboard changeuser={setUser} data={loggedInUserdata} />): null}
    </>
  );
};

export default App;
