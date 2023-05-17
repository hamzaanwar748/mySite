import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="" style={{ background: "rgb(58, 68, 104)" }}>
      <div className=" md:flex md:flex-row md:justify-center md:items-center flex flex-col  justify-center items-center text-white ">
        <div className="p-4 lg:mx-8 md:mx-0 flex flex-col justify-center items-center">
          <p className="font-bold text-2xl py-2">SHOP</p>
          <p className="flex items-center text-lg py-2">
            <FaMapMarkerAlt />
            <span className="ml-1">Address</span>
          </p>
          <p className="flex items-center text-lg py-2">
            <FaPhoneAlt />
            <span className="ml-1"> +01 1234567890</span>
          </p>
          <p className="flex items-center text-lg py-2">
            <HiMail />
            <span className="ml-1"> demo@gmail.com</span>
          </p>
        </div>
        <div className="lg:mx-8 md:mx-0  mx-4 flex flex-col items-center justify-center">
          <p className=" text-2xl pb-4 pt-0">Information</p>
          <p className="md:w-[250px]">
            Eligendi sunt, provident, debitis nemo, facilis cupiditate velit
            libero dolorum aperiam enim nulla iste maxime corrupti ad illo
            libero minus.
          </p>
        </div>
        <div className="p-4 lg:mx-8 md:mx-0">
          <p className="text-2xl my-3">Useful Link</p>
          <ul className="flex flex-col justify-center items-center">
            <li className=" text-white font-medium text-lg cursor-pointer">
              <Link to="/"> Home</Link>
            </li>
            <li className=" text-white font-medium text-lg cursor-pointer">
              <Link to="/about"> About</Link>
            </li>
            <li className=" text-white font-medium text-lg  cursor-pointer">
              <Link to="/products"> Products</Link>
            </li>
            <li className=" text-white font-medium text-lg cursor-pointer">
              <Link to="WhyUs"> Why Us</Link>
            </li>
            <li className=" text-white font-medium text-lg cursor-pointer">
              Testimonial
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center lg:mx-8 md:w-auto">
          <p className="text-2xl  pt-5">Newsletter</p>
          <input
            className="lg:px-2 py-2 md:w-auto lg:w-64 mt-4"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-yellow-400  lg:w-36 py-2 font-semibold mt-4">
            SUBSCRIBE
          </button>
          <div className="flex pt-6">
            <FaFacebookF className="px-2 text-3xl" />
            <FaTwitter className="px-2 text-4xl" />
            <FaInstagram className="px-2 text-4xl" />
            <FaYoutube className="px-2 text-4xl" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center text-white border-t  border-white mx-4   md:mx-36">
          <p className="py-3">
            © 2023 All Rights Reserved By Free Html Templates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
