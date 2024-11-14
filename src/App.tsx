import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HOMEPAGE/HomePage";
import Login from "./SCREENS/Login/Login";
import AboutUs from "./PAGES/AboutUs";
import ContactUs from "./PAGES/ContactUs";
import Shop from "./PAGES/Shop";
import Sale from "./PAGES/Sale";
import Review from "./PAGES/Review";
import SignUp from "./SCREENS/Signup/SignUp";
import UserDashboard from "./SCREENS/UserDashboard/UserDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
