import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/actions/Action";
import { NavLink } from "react-router-dom";

const Cartproduct = () => {
  const product = useSelector((state) => state.AddCartProduct.cart);
  const dispatch = useDispatch();
  if (product?.length !== 0) {
    return (
      <div>
        {product.map((i) => {
          return (
            <div
              key={i.id}
              className="md:flex md:flex-row  border my-7 md:mx-4 flex flex-col justify-center items-center mx-4 shadow-lg "
            >
              <img className="p-3 w-[200px]" src={i.image} alt={i.title} />;
              <div className="px-3">
                <p className="pt-2 pb-2 font-bold text-md">{i.title}</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum asperiores consequuntur quod molestiae totam iusto
                  dignissimos vitae quidem dolor, et itaque dolore consectetur
                  est voluptates non quam placeat deserunt. Sit, vel. Doloribus
                  rem neque dolorum autem ut vel nam fuga magni voluptatum
                  tenetur eveniet blanditiis dolores maiores aut eius, ipsam
                  aliquam. Voluptas quisquam earum odit voluptatem soluta
                  tempore aliquid nobis?
                </p>
                <p className="  py-2 ">Rs : {i.price}</p>
                <button
                  className="bg-red-600 text-white py-1 mb-2 px-2 rounded-md hover:bg-transparent hover:text-red-600 border border-red-600"
                  onClick={() => dispatch(removeProduct(i.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        className=" flex flex-col justify-center items-center md:mx-0
      mx-3 my-36"
      >
        <p className="text-2xl md:text-4xl font-bold">
          Please Add Some Product
        </p>
        <NavLink to="/products">
          <button className="bg-yellow-400 text-white px-3 rounded-md py-2 my-3 hover:bg-transparent hover:text-yellow-400 border border-yellow-400">
            Go To Products
          </button>
        </NavLink>
      </div>
    );
  }
};

export default Cartproduct;
