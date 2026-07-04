import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import CaptainLogin from "./Pages/CaptainLogin";
import Userlogin from "./Pages/Userlogin";
import Usersignup from "./Pages/Usersignup";
import CaptainSignup from "./Pages/CaptainSignup";
import { useContext } from "react";
import { UserDataContext } from "./Context/UserContext";
import UserProtectedWrapper from "./Pages/UserProtectedWrapper";
import UserLogout from "./Pages/UserLogout";
import CaptainHome from "./Pages/CaptainHome";
import CaptainProtectedWrapper from "./Pages/CaptainProtectedWrapper";

function App() {
  const ans = useContext(UserDataContext);
  console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/users/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/Signup" element={<Usersignup />} />
        <Route path="/Captain-login" element={<CaptainLogin />} />
        <Route path="/Captain-signup" element={<CaptainSignup />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
