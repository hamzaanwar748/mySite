import React, { useEffect } from "react";
import {
  HiPhone,
  HiMail,
  HiSearch,
  HiUser,
  HiShoppingCart,
} from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { ShowAlert } = props;
  const product = useSelector((state) => state.AddCartProduct.cart);
  useEffect(() => {
    if (ShowAlert) {
      alert(true);
    }
  });
  return (
    <div
      style={{ background: "rgb(67, 79, 120)" }}
      className="md:h-[70px] md:flex md:items-center  w-full"
    >
      <div className="hidden lg:flex ">
        <div className="md:flex items-center ml-5 ">
          <HiPhone className="text-yellow-500 pr-1 text-[20px]" />
          <p className="text-white font-normal text-md  hover:text-yellow-500 cursor-pointer transition-colors duration-200">
            Call : +01 123455678990
          </p>
        </div>
        <div className="flex items-center ml-3">
          <HiMail className="text-yellow-500 pr-1 text-[25px]" />
          <p className="text-white font-normal text-md  hover:text-yellow-500 cursor-pointer transition-colors duration-200">
            Email : demo@gmail.com
          </p>
        </div>
      </div>
      <div className="lg:flex lg:justify-center flex items-center lg:items-center lg:m-auto md:m-5  justify-center pt-4 pb-2">
        <input
          className="h-10 rounded-l-md w-48 pl-2 outline-none "
          type="text"
          placeholder="Search Here..."
        />
        <HiSearch className="text-white  h-10 rounded-r-md border border-transparent  bg-yellow-500 px-3  text-[50px]" />
      </div>
      <div className="lg:flex lg:justify-end lg:items-center md:flex md:justify-end md:ml-auto lg:mx-6 flex justify-center ">
        <Link to={`/LoginPage`}>
          <div className="lg:flex lg:justify-end lg:items-center md:flex md:justify-end md:ml-auto lg:mx-6 flex items-center mb-6 mt-4 mr-3  text-xl">
            <HiUser className="text-yellow-500 pr-1 text-[25px]" />
            <p className="text-white font-normal text-md  hover:text-yellow-500 cursor-pointer transition-colors duration-200">
              MY ACCOUNT
            </p>
          </div>
        </Link>
        <Link to={`/cartproduct`}>
          <div className="lg:flex lg:justify-end lg:items-center md:flex md:justify-end  md:mx-6 flex items-center ml-3 mt-4 mb-6  text-xl">
            <HiShoppingCart className="text-yellow-500 pr-1 text-[25px] " />
            <p className="text-white font-normal text-md  hover:text-yellow-500 cursor-pointer transition-colors duration-200">
              CART
              <span className="bg-red-700 text-white rounded-full py-1 px-2 text-center mx-1 text-base">
                {product?.length}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
