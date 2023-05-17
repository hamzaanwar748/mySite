import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../redux/actions/Action";
import ProductHandler from "./ProductHandler";

const Products = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const dispatchProducts = useDispatch();

  const getCardData = async () => {
    const res = await fetch(`http://localhost:3006/Api?_limit=8&_page=${page}`);
    const data = await res.json();
    setCard((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  dispatchProducts(Product(card));
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    });
  }, []);

  // const handleLoad = () => {
  //   setPage((prev) => prev + 1);
  // };

  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center ">
        <ProductHandler />
      </div>
      <div className="flex justify-center items-center">
        {/* <button
          className="my-8 bg-yellow-500 text-white rounded-md px-12 py-2"
          onClick={handleLoad}
        >
          Load more
        </button> */}
      </div>
    </>
  );
};

export default Products;
