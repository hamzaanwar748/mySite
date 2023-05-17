import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [username, setuserName] = useState("");
  const [pasword, setPasword] = useState("");

  const loginUser = async (userName, password) => {
    const { data } = await axios.post("http://localhost:3006/login", {
      userName,
      password,
    });
    console.log(data);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col  w-auto  mx-12  shadow-2xl  mt-10 mb-20 rounded-md">
        <div className="ml-[50px]">
          <h1
            style={{ fontFamily: "cursive" }}
            className="mt-9 font-bold fo text-3xl "
          >
            Sign Up
          </h1>
        </div>
        <div className="mt-4 mx-12">
          <div className="flex">
            <div className="flex border items-center px-2 mr-4 rounded-md ">
              <input
                style={{ fontFamily: "initial" }}
                className="shadow-2xl w-40 px-2 py-2  outline-none "
                placeholder="First name"
                type="text"
              />
            </div>
            <div className="flex border items-center px-2 rounded-md ">
              <input
                style={{ fontFamily: "initial" }}
                className="shadow-2xl w-40  px-2 py-2  outline-none "
                placeholder="Last name"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="flex border items-center px-2 rounded-md mt-3 mx-12">
          <input
            style={{ fontFamily: "initial" }}
            className="shadow-2xl  w-60 px-2 py-2  outline-none "
            placeholder="Mobile number or email"
            aria-label="Search"
            type="Email"
          />
        </div>
        <div className="flex border items-center px-2 rounded-md mt-3 mx-12">
          <input
            value={username}
            onChange={(e) => setuserName(e.target.value)}
            style={{ fontFamily: "initial" }}
            className="shadow-2xl  w-60 px-2 py-2  outline-none "
            placeholder="Username"
            aria-label="Search"
            type="Email"
          />
        </div>
        <div className="flex border items-center px-2 rounded-md mt-3 mx-12">
          <input
            value={pasword}
            onChange={(e) => setPasword(e.target.value)}
            style={{ fontFamily: "initial" }}
            className="shadow-2xl  w-60 px-2 py-2  outline-none "
            placeholder="New password"
            aria-label="Search"
            type="Email"
          />
        </div>

        <div className="flex justify-center items-center">
          <Link to={`/LoginPage`}>
            <button
              onClick={() => loginUser(username, pasword)}
              style={{ fontFamily: "cursive" }}
              className="bg-yellow-400 text-white w-[270px] py-1 rounded-2xl mt-3 mb-9"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
