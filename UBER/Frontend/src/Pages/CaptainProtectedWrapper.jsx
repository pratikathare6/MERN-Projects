import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setcaptain } = useContext(CaptainDataContext);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/Captain-login");
    }
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setcaptain(data.captain);
        setisloading(false);
      }
    }).catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })

  if (isloading) {
    return <div>Loading....</div>;
  }

  return <div>{children}</div>;
};

export default CaptainProtectedWrapper;
