import React from "react";

const About = () => {
  return (
    <div style={{ background: "rgb(54, 49, 97)" }}>
      <div className="md:flex md:flex-row flex flex-col">
        <div
          className="text-white lg:flex-1  lg:py-28 lg:pl-16 lg:pr-8
        md:my-8 ml-8 mr-2 mt-4"
        >
          <p className="text-3xl font-semibold pb-6">We Provide Best For You</p>
          <p className="">
            Totam architecto rem beatae veniam, cum officiis adipisci soluta
            perspiciatis ipsa, expedita maiores quae accusantium. Animi veniam
            aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis
            sit labore officia! Repellat expedita, deserunt eum soluta rem
            culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae
            aperiam animi sint earum, ex unde cupiditate, molestias dolore quos
            quas possimus eveniet facilis magnam? Vero, dicta.
          </p>
          <button className="text-white lg:flex-1 bg-yellow-400 px-10 hover:bg-transparent border border-yellow-400 hover:text-yellow-400 py-2 rounded-md my-5">
            Read More
          </button>
        </div>
        <div>
          <img
            className="md:w-[1200px] lg:mt-0  mt-7 mr-3  lg:w-full w-full"
            src="images/about-img.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
