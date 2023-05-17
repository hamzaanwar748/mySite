import React, { useEffect } from "react";
import Welcome from "./Welcome";
import Products from "./Products";
import About from "./About";
import Whyus from "./Whyus";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (!localStorage) {
      nav("/LoginPage");
    }
  }, []);
  return (
    <div>
      <Welcome />
      <Products />
      <About />
      <Whyus />
      <Footer />
    </div>
  );
};

export default Home;
