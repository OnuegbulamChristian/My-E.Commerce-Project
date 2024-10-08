import React from "react";
import "./HeroSection.css";
import HeroImage from "../../ASSETS/young-person-wearing-hoodie-mockup.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="Hero-section_div">
      <div className="Hero-section-parent-div">
        <div className="Hero_container1">
          <h1>
            Experience Timeless & Luxury Fashion With Our Exquisite Collections
          </h1>
          <p>
            We curate the finest fashion pieces, blending contemporary elegance
            with iconic design. From runway inspired collections to bespoke
            accessories
          </p>
          <Link to={"/Shop"}>
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="Hero_container2">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
