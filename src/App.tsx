import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HOMEPAGE/HomePage";
import SignUp from "./SCREENS/SignUp";
import Login from "./SCREENS/Login";
import Categories from "./PAGES/Categories";
import AboutUs from "./PAGES/AboutUs";
import ContactUs from "./PAGES/ContactUs";
import FAQ from "./PAGES/FAQ";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
