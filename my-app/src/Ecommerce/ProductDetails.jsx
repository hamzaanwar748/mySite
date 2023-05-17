import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddCart } from "../redux/actions/Action";
import { useState } from "react";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

const ProductDetails = () => {
  const searchInput = useRef("");
  const resultText = searchInput.current.innerText;
  const Dispatch = useDispatch();
  let [product, setProduct] = useState([]);
  const [imgReplace, setImgReplace] = useState("");
  const [image, setImage] = useState([]);
  const [textField, setTextField] = useState("");

  const { productId } = useParams();
  
  const fethProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:3006/Api/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    setProduct([response.data]);
    setImgReplace(response.data.image);
    setImage(response.data.image);
  };

  useEffect(() => {
    if (productId) fethProductDetail();
  }, [productId]);

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { background: "yellow" }
                : {}
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div ref={searchInput} id={"container"}>
      <div className="lg:flex lg:justify-center flex items-center lg:items-center lg:m-auto md:m-5  justify-center pt-4 pb-2">
        <input
          className="h-7 rounded-md w-48 pl-1 border border-gray-500  outline-none text-sm "
          type="text"
          placeholder="Search Here..."
          value={textField}
          onChange={(e) => {
            setTextField(e.target.value);
          }}
        />

        <HiArrowSmUp
          className="border border-transparent cursor-pointer text-2xl hover:bg-slate-200 text-gray-500 rounded-[50%] ml-1"
          onClick={() => {
            const element = document.getElementById("container");
            if (element) {
              window.scrollTo(element.scrollTop + 100, 0);
            }
          }}
        />
        <HiArrowSmDown
          className="border border-transparent cursor-pointer mr-4 text-2xl hover:bg-slate-200 text-gray-500 rounded-[50%] ml-1"
          onClick={() => {
            const element = document.getElementById("container");
            if (element) {
              window.scrollTo(0, element.scrollTop + 100);
            }
          }}
        />
      </div>

      <div className="md:flex md:justify-center md:flex-row lg:flex lg:justify-center flex flex-col justify-center my-4 mx-12">
        <img className="w-80 h-64" src={imgReplace} alt="" />
        {product.map((i) => {
          return (
            <div className="text-justify lg:w-auto md:w-[500px] w-full md:px-12">
              <p className="pt-2 pb-2  font-bold text-md">{i.title}</p>
              <p>{getHighlightedText(i.description, textField)}</p>
              <p className="pt-2 pb-2 text-red-600"> $ {i.price}</p>
              <button
                className="rounded-md w-28 h-10  py-0  text-white "
                style={{ background: "rgb(58, 68, 104)" }}
                onClick={() => Dispatch(AddCart(product))}
              >
                Add Cart
              </button>
            </div>
          );
        })}
      </div>
      <div></div>
      <div className="flex mx-14 mb-12">
        {image.map((i) => {
          return (
            <img
              className="p-3 w-20 rounded-md cursor-pointer"
              onClick={() => setImgReplace(i)}
              src={i}
              alt={product.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
