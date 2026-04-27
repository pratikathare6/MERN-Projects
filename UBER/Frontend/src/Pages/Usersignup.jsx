import { Link } from "react-router-dom";
import { useState } from "react";

const Usersignup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userdata, setuserdata] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    setuserdata({ username:{firstname:firstname, lastname: lastname}, email: email, password: password });
    console.log(userdata);

    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-10"
          src="https://www.pngall.com/wp-content/uploads/13/Uber-Logo-PNG-File.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <h3 className="text-lg mb-2">What's your name</h3>

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

          <h3 className="text-lg mb-2 mt-2">What's your email</h3>
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
            className="bg-[#eeee] rounded border px-4 py-2 w-full font-medium placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="flex justify-center font-semibold text-white bg-black px-3 py-2 rounded w-full mt-5">
            Create account
          </button>

          <p className="text-center mt-2">
            Already have account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
      <p className="text-[9px] leading-3 text-center">
            By procedding, you concent to get emails including by automated means, from Uber and it's 
            affiliates to the email provided.
      </p>
      </div>
    </div>
  );
};

export default Usersignup;
