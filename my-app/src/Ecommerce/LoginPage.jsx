import { React, useState, useEffect, useRouter } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

const LoginPage = () => {
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [errorUser, setErrorUser] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [login, setLogin] = useState("");
  const [showPass, setShowPass] = useState(false);

  const nav = useNavigate();
  const HandleLogin = async () => {
    if (email == "") {
      setErrorUser("Please type your username");
    } else if (password == "") {
      setErrorPass("Please type your password");
    }
    fetch("http://localhost:3006/login").then(async (response) => {
      setData(await response.json());
    });
    const result = data.find((i) => i.email == email && i.password == password);
    localStorage.setItem("user-info", JSON.stringify(result));
    const item = localStorage.getItem("user-info");
    if (item === result) {
      nav("/");
    }
    window.location.reload(true);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:w-[450px] w-auto  mx-12  shadow-2xl items-center my-16 rounded-md">
        <div>
          <h1
            style={{ fontFamily: "monospace" }}
            className="mt-9 font-bold fo text-3xl "
          >
            Login
          </h1>
        </div>
        <div className="mt-8 mx-12">
          <form action="">
            <label
              style={{ fontFamily: "initial" }}
              className="text-gray-600 ml-1"
              htmlFor="Username"
            >
              Username
            </label>
            <div className="flex border items-center px-2 rounded-md ">
              <FaUserAlt className="text-gray-400 text-sm" />
              <input
                value={email}
                onChange={(e) => setUserName(e.target.value)}
                name="Username"
                style={{ fontFamily: "initial" }}
                className="shadow-2xl  w-60 px-2 py-2  outline-none "
                placeholder="Type your username"
                aria-label="Search"
                type="name"
              />
            </div>
          </form>
          <p style={{ fontFamily: "initial" }} className="text-red-600 text-sm">
            {errorUser}
          </p>
        </div>
        <div className="mt-4">
          <form action="">
            <label
              style={{ fontFamily: "initial" }}
              className="text-gray-600 ml-1"
              htmlFor="Password"
            >
              Password
            </label>

            <div className="flex border items-center px-2 rounded-md ">
              <FaLock className="text-gray-400 text-sm" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ fontFamily: "initial" }}
                className="shadow-2xl  w-60 px-2 py-2  outline-none "
                placeholder="Type your password"
                aria-label="Search"
                name="Password"
                type={showPass ? "text" : "password"}
              />
            </div>
            <div className="flex">
              {!showPass ? (
                <HiEye
                  className="text-gray-600 mt-2"
                  onClick={() => setShowPass(true)}
                />
              ) : (
                <HiEyeOff
                  className="text-gray-600 mt-2"
                  onClick={() => setShowPass(false)}
                />
              )}
              <p className="mx-1 text-sm mt-[5px] text-gray-600">
                Show password
              </p>
            </div>
          </form>
          <p style={{ fontFamily: "initial" }} className="text-red-600 text-sm">
            {errorPass}
          </p>
        </div>
        <div className="">
          <Link>
            <p
              className="ml-40 mt-2 underline hover:text-yellow-400 text-gray-600 text-sm"
              style={{ fontFamily: "initial" }}
            >
              Forgot password?
            </p>
          </Link>
          {/* <Link to={`/SignUpPage`}> */}
          <p
            className="ml-32 mt-1 underline hover:text-yellow-400 text-gray-600 text-sm"
            style={{ fontFamily: "initial" }}
          >
            I don't have any account
          </p>
          {/* </Link> */}
        </div>
        <div>
          <button
            onClick={HandleLogin}
            style={{ fontFamily: "cursive" }}
            className="bg-yellow-400 text-white w-[270px] py-1 rounded-2xl mt-3 mb-9"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
