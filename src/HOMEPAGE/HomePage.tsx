import React from "react";
import Navbar1 from "../COMPONENTS/Navbar/Navbar";
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import AboutSection from "../COMPONENTS/AboutSection/AboutSection";
import Offers from "../COMPONENTS/Offers/Offers";

const HomePage = () => {
  return (
    <div>
      <Navbar1 />
      <HeroSection />
      <AboutSection />
      <Offers />
    </div>
  );
};

export default HomePage;
