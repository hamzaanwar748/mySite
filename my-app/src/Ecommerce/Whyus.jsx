import React from "react";
import { HiTruck, HiShoppingCart } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";

const Whyus = () => {
  return (
    <div className="mt-16 mb-12">
      <div className="flex justify-center items-center">
        <p className="text-4xl font-bold mb-7">Why Choose Us</p>
      </div>
      <div className="md:flex md:mt-7 md:justify-center ">
        <div className="flex flex-col justify-center items-center mx-6 border shadow-md px-6 pt-10 pb-12 mb-5">
          <HiTruck className="text-7xl hover:text-yellow-400" />
          <p className="font-bold text-xl py-1">FAST DELIVERY</p>
          <p className="text-base">
            variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 border shadow-md px-6 pt-10 pb-12 mb-5">
          <HiShoppingCart className="text-7xl hover:text-yellow-400" />
          <p className="font-bold text-xl py-1">FREE SHIPING</p>
          <p className="text-base">
            variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 border shadow-md px-6 pt-10 pb-12 mb-5">
          <FaMedal className="text-7xl hover:text-yellow-400" />
          <p className="font-bold text-xl py-1">BEST QUALITY</p>
          <p className="text-base">
            variations of passages of Lorem Ipsum available
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
