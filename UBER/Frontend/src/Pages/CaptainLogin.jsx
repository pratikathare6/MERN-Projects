import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captainData, setcaptainData] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    setcaptainData({ email: email, password: password });
    console.log(captainData);
    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />

        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <h3 className="text-sm mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeee] rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <h3 className="text-sm mb-2 mt-1">Enter password</h3>
          <input
            required
            className="bg-[#eeee] rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="flex justify-center font-semibold text-white bg-black px-3 py-2 rounded w-full mt-5">
            Login
          </button>

          <p className="text-center mt-2">
            New here?{" "}
            <Link to="/Captain-signup" className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/login"
          className="flex justify-center font-semibold text-black bg-[#f3c164] px-3 py-2 rounded w-full mt-5"
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
