import React, { createContext, useState, useEffect } from "react";
import { getlocalstorege, setlocalstorege } from "../../utils/localStorage";

export const AuthContext = createContext(); //create context

const AuthProvider = ({ children }) => {      
    const [userdata, setuserdata] = useState(null)

    useEffect(() => {

        // localStorage.clear();

          setlocalstorege();
          const {employees} = getlocalstorege()
          setuserdata(employees);
     
    }, [])

  return (
    <div>
      <AuthContext.Provider value={[userdata,setuserdata]}> {children} </AuthContext.Provider>
      {/* provide context */}
    </div>
  );
};

export default AuthProvider;
