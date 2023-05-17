import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        className="h-auto flex items-center lg:flex lg:items-center"
        style={{ background: "rgb(58, 68, 104)" }}
      >
        <div>
          <p className="text-white text-[28px] font-bold m-[12px]">Shop</p>
        </div>
        <div className="flex justify-end ml-auto">
          <div>
            <div>
              <ul className="lg:flex hidden">
                <li className="mx-3 text-white hover:text-yellow-500 font-medium text-lg cursor-pointer transition-colors duration-200">
                  <NavLink to="/"> Home</NavLink>
                </li>
                <li className="mx-5 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer transition-colors duration-200">
                  <NavLink to="/about"> About</NavLink>
                </li>
                <li className="mx-5 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer transition-colors duration-200">
                  <NavLink to="/products"> Products</NavLink>
                </li>
                <li className="mx-5 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer transition-colors duration-200">
                  <NavLink to="WhyUs"> Why Us</NavLink>
                </li>
                <li className="ml-5 mr-8 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer transition-colors duration-200">
                  <NavLink to="/AddNewProduct"> Add product</NavLink>
                </li>
              </ul>
            </div>
            <div className="lg:hidden" onClick={() => setMenu(!menu)}>
              {!menu ? (
                <HiOutlineMenu className="text-2xl font-bold mr-3 text-white" />
              ) : (
                <HiX className="text-2xl font-bold mr-3 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: "rgb(58, 68, 104)" }}
        className={!menu ? "hidden" : "flex justify-center"}
      >
        <ul className="">
          <li className="my-4 text-yellow-500 font-medium text-lg cursor-pointer">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="my-4 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="my-4 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer">
            <NavLink to="/products"> Products</NavLink>
          </li>
          <li className="my-4 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer">
            <NavLink to="WhyUs"> Why Us</NavLink>
          </li>
          <li className="my-4 text-white font-medium text-lg hover:text-yellow-500 cursor-pointer">
            Testimonial
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
