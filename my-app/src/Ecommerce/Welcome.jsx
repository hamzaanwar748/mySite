import React from "react";

const Welcome = () => {
  const style = {
    color: "rgb(109, 109, 109)",
  };
  return (
    <div className="mb-28">
      <div className="lg:flex md:flex md:flex-row flex flex-col justify-center lg:mt-20 md:mt-7 items-center">
        <div className="lg:ml-24 lg:mt-16 md:ml-28 md:mt-12 md:w-auto md:mr-auto mt-8 w-auto">
          <h1
            style={{ color: "rgb(58, 68, 104)" }}
            className="text-4xl font-bold mb-6 lg:text-justify md:text-justify text-center mx-3"
          >
            Welcome to our shop
          </h1>
          <p
            className="mb-6 lg:text-justify md:text-justify  mx-4 "
            style={style}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam
            velit saepe dolorem deserunt quo quidem ad optio.
          </p>
          <button className="bg-yellow-400 text-white border border-yellow-400 hover:bg-transparent hover:text-yellow-400 rounded-md px-10 font-bold py-2 ml-4">
            Read More
          </button>
        </div>
        <div className="md:mt-8 md:mr-16">
          <img className="md:w-[600px]" src="images/slider-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
