import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CaptainLogin from "./Pages/CaptainLogin";
import Userlogin from "./Pages/Userlogin";
import Usersignup from "./Pages/Usersignup";
import CaptainSignup from "./Pages/CaptainSignup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/Signup" element={<Usersignup />} />
        <Route path="/Captain-login" element={<CaptainLogin />} />
        <Route path="/Captain-signup" element={<CaptainSignup />} />
      </Routes>
     
    </div>
  );
}

export default App;
