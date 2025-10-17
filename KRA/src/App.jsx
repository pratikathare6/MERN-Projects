import { Revenuecard } from "./Components/card";
import Register from "./Components/register";
import Protectedroute from "./Components/protectedroute.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/Revenuecard"
          element={
            <Protectedroute>
              <Revenuecard />
            </Protectedroute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;