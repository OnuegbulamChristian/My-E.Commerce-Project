import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HOMEPAGE/HomePage";
import SignUp from "./SCREENS/SignUp";
import Login from "./SCREENS/Login";

import AboutUs from "./PAGES/AboutUs";
import ContactUs from "./PAGES/ContactUs";
import FAQ from "./PAGES/Sale";
import Shop from "./PAGES/Shop";
import Sale from "./PAGES/Sale";
import Review from "./PAGES/Review";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
