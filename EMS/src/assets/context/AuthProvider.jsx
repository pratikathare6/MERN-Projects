import React, { createContext } from "react";
import { getlocalstorege } from "../../utils/localStorage";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <div>
      <AuthContext.Provider value={"pratik"}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
