import React, { useState } from "react";
import axios from "axios";

const AddNewProduct = () => {
  const [title, settitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [images, setAllimages] = useState([]);

  const handleAddProduct = async (title, price, description) => {
    console.log(images);
    const { data } = await axios.post("http://localhost:3006/Api", {
      title,
      price,
      description,
      image: [image1, image2, image3, image4],
    });
    console.log(data, "data");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-8">
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="mx-2 px-2 border border-gray-500  rounded-md py-1 outline-none"
            type="text"
            placeholder="Product name"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border mx-2 border-gray-500 px-2 rounded-md py-1 outline-none"
            type="text"
            placeholder="Price"
          />
        </div>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-500 pl-2 pr-12 mt-3  w-[405px] rounded-md py-1 outline-none"
          type="text"
          placeholder="Product description"
        />
        <input
          value={image1}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-500 pl-2 pr-12 mt-3  w-[405px] rounded-md py-1 outline-none"
          type="text"
          placeholder="Image url"
        />
        <input
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
          className="border border-gray-500 pl-2 pr-12 mt-3  w-[405px] rounded-md py-1 outline-none"
          type="text"
          placeholder="Image url"
        />
        <input
          value={image3}
          onChange={(e) => setImage3(e.target.value)}
          className="border border-gray-500 pl-2 pr-12 mt-3  w-[405px] rounded-md py-1 outline-none"
          type="text"
          placeholder="Image url"
        />
        <input
          value={image4}
          onChange={(e) => setImage4(e.target.value)}
          className="border border-gray-500 pl-2 pr-12 mt-3  w-[405px] rounded-md py-1 outline-none"
          type="text"
          placeholder="Image url"
        />
      </div>
      <div className="flex justify-center">
        <button
          className=" bg-yellow-500 w-[405px] rounded-md text-white mt-3 py-2"
          onClick={() => handleAddProduct(title, price, description, images)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewProduct;
