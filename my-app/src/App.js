import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Ecommerce/Header";
import Navbar from "./Ecommerce/Navbar";
import Whyus from "./Ecommerce/Whyus";
// import Footer from "./Ecommerce/Footer";
import LoginPage from "./Ecommerce/LoginPage";
import Loggedin from "./Ecommerce/Loggedin";
import Protected from "./Ecommerce/Protected";
import AddNewProduct from "./Ecommerce/AddNewProduct";

const Home = lazy(() => import("./Ecommerce/Home"));
const Products = lazy(() => import("./Ecommerce/Products"));
const ProductDetails = lazy(() => import("./Ecommerce/ProductDetails"));
const Cartproduct = lazy(() => import("./Ecommerce/Cartproduct"));
const About = lazy(() => import("./Ecommerce/About"));

function App() {
  const item = localStorage.getItem("user-info");
  console.log(item, "item");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes>
            <Route path="/" element={<Protected Component={Home} />} />
            <Route path="/about" element={<Protected Component={About} />} />
            <Route
              path="/products"
              element={<Protected Component={Products} />}
            />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route
              path="/cartproduct"
              element={<Protected Component={Cartproduct} />}
            />

            <Route path="/WhyUs" element={<Protected Component={Whyus} />} />
            <Route
              path="/AddNewProduct"
              element={<Protected Component={AddNewProduct} />}
            />
            {item ? (
              <Route path="/LoginPage" element={<Loggedin />} />
            ) : (
              <Route path="/LoginPage" element={<LoginPage />} />
            )}

            {/* <Route path="/SignUpPage" element={<SignUpPage />} /> */}
          </Routes>
        </Suspense>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
