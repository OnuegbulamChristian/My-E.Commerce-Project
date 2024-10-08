import React from "react";
import "./AboutSection.css";
import AboutImage from "../../ASSETS/About.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="About-section_div">
      <div className="About-section_parent_div">
        <div>
          <img src={AboutImage} alt="" />
        </div>
        <div>
          <h1>About Us</h1>
          <p>
            At Shopifi, we believe fashion is more than just clothing; it’s an
            expression of individuality, confidence, and art. Founded with a
            passion for high quality craftsmanship and an eye for elegance, our
            mission.......
          </p>
          <Link to={"/AboutUs"}>
            <button> Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
