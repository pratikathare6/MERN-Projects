import axios from "axios";
import Logout from "../Components/Logout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Home = () => {
  const navigate = useNavigate();
  const [res, Setres] = useState("");
  const [user, Setuser] = useState(null);

  useEffect(() => {
    const getHome = async () => {
      try {
        const response = await axios.get("http://localhost:3000/home", {
          withCredentials: true,
        });

        console.log(response.data.msg);
        console.log(response.data.user);

        Setres(response.data.msg);
        Setuser(response.data.user);
      } catch (err) {
        if (err.response.status === 401) {
          alert("please login first");
          navigate("/");
        }
      }
    };

    getHome();

    console.log(res);
  }, []);

  return (
    <div>
      <div>
        <Logout></Logout>
      </div>
      <div className="text-black font-extrabold flex justify-center">{res}</div>
      <div className="text-black font-extrabold flex justify-center">
        {user?.email}
      </div>
    </div>
  );
};

export default Home;
