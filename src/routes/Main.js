
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<Products />} exact />
        {/* <Route path="/register" element={<Registration />} exact /> */}
        {/* <Route component={Error} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Main;