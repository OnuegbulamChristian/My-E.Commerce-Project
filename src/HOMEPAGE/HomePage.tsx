import React from "react";
import Navbar1 from "../COMPONENTS/Navbar/Navbar";
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import AboutSection from "../COMPONENTS/AboutSection/AboutSection";
import Offers from "../COMPONENTS/Offers/Offers";
import Discount from "../COMPONENTS/Discount/Discount";
import Cartegories from "../COMPONENTS/Cartegories/Cartegories";
import CustomerReview from "../COMPONENTS/CustomerReview/CustomerReview";
import Footer from "../COMPONENTS/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar1 />
      <HeroSection />
      <AboutSection />
      <Offers />
      <Discount />
      <Cartegories />
      <CustomerReview />
      <Footer />
    </div>
  );
};

export default HomePage;
