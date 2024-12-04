import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./PAGES/Home/Home";
import Collections from "./PAGES/Collections/Collections";
import About from "./PAGES/About/About";
import Contact from "./PAGES/Contact/Contact";
import Product from "./PAGES/Product/Product";
import Cart from "./PAGES/Cart/Cart";
import Login from "./PAGES/Login/Login";
import PlaceOrder from "./PAGES/PlaceOrder/PlaceOrder";
import Orders from "./PAGES/Orders/Orders";
import Navbar from "./COMPONENTS/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
