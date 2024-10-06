import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HOMEPAGE/HomePage";
import SignUp from "./SCREENS/SignUp";
import Login from "./SCREENS/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
