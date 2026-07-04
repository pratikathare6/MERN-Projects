import { Link } from "react-router-dom";
import React, { useState } from "react";
import { CaptainDataContext } from "../Context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehiclePlate, setvehiclePlate] = useState("");
  const [vehicleCapacity, setvehicleCapacity] = useState("");
  const [vehicleType, setvehicleType] = useState("car");

  const { captain, setcaptain } = React.useContext(CaptainDataContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: { firstName: firstname, lastName: lastname },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData,
      );
      if (response.status === 200) {
        const data = response.data;
        setcaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log("validation err", error.response?.data);
    }

    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
    setvehicleColor("");
    setvehiclePlate("");
    setvehicleCapacity("");
    setvehicleType("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-2"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />

        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <h3 className="text-lg mb-2">What's our captains name</h3>

          <div className="flex gap-2">
            <input
              required
              className="bg-[#eeee] rounded border px-4 py-2 w-1/2 font-medium placeholder:text-base"
              type="text"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeee] rounded border px-4 py-2 w-1/2 font-medium placeholder:text-base"
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg mb-2 mt-2">What's our captains email</h3>
          <input
            required
            className="bg-[#eeee] rounded border px-4 py-2 w-full font-medium placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <h3 className="text-lg mb-2 mt-2 ">Enter password</h3>
          <input
            required
            className="bg-[#eeee] rounded border mb-4  px-4 py-2 w-full font-medium placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <h3 className="text-lg mb-2 mt-1 ">Vehicle Information</h3>
          <div className="grid grid-cols-2 gap-2">
            <input
              required
              className="bg-[#eeee] rounded border mb-1 px-4 py-2 w-full font-medium placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setvehicleColor(e.target.value);
              }}
            />

            <input
              required
              className="bg-[#eeee] rounded border mb-1 px-4 py-2 w-full font-medium placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setvehiclePlate(e.target.value);
              }}
            />

            <input
              required
              className="bg-[#eeee] rounded border mb-1 px-4 py-2 w-full font-medium placeholder:text-base"
              type="text"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setvehicleCapacity(e.target.value);
              }}
            />

            <select
              required
              className="bg-[#eeee] rounded border mb-1 px-4 py-2 w-full font-medium placeholder:text-base"
              value={vehicleType}
              onChange={(e) => {
                setvehicleType(e.target.value);
              }}
            >
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Moto</option>
  
            </select>
          </div>

          <button className="flex justify-center font-semibold text-white bg-black px-3 py-2 rounded w-full mt-5">
            Create account
          </button>

          <p className="text-center mt-2">
            Already have account?{" "}
            <Link to="/Captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-[9px] leading-3 text-center">
          By procedding, you concent to get emails including by automated means,
          from Uber and it's affiliates to the email provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
