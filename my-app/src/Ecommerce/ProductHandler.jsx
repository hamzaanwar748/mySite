import React, { lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductHandler = () => {
  const products = useSelector((state) => state.allProducts.product);
  console.log(products);
  const renderlist = products.map((product) => {
    const { id, title, image, price } = product;
    const item = localStorage.getItem("user-info");
    console.log(item, "data");

    return (
      <div
        className=" w-auto h-auto  rounded-md  my-6 text-center flex flex-col justify-center items-center mx-12 transform hover:scale-110  duration-300"
        key={id}
      >
        <Link to={`/product/${id}`}>
          <img
            className="p-3 w-60 h-48"
            src={image}
            alt={title}
            loading={lazy}
          />
          <p className="px-3 pt-2 font-bold text-md">{title}</p>
          <p className="px-3 pt-2 text-red-600 "> $ {price}</p>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div
        className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid 
    sm:grid-cols-2 "
      >
        {renderlist}
      </div>
    </>
  );
};

export default ProductHandler;
