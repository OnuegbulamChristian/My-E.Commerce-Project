import React from "react";
import HeroImage from "../../ASSETS/Hero image.jpg";

const Hero = () => {
  return (
    <div className="w-full h-max md:h-[86vh] bg-transparent py-[3vh]">
      <div className="w-[95%] h-max md:h-[80vh] flex flex-col md:flex-row border-[2px] border-black items-center justify-center mx-auto">
        {/* hero left side */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-10 md:py-0">
          <div className="text-black">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-black"></p>
              <p className="font-medium text-sm md:text-xl">OUR BESTSELLER</p>
            </div>
            <h1 className="prata-regular text-3xl md:py-3 md:text-5xl leading-relaxed text-red-800">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-xl">Shop Now</p>
              <p className="w-8 md:w-11 h-[2px] bg-black"></p>
            </div>
          </div>
        </div>
        {/* hero right side */}
        <div className="w-full md:w-1/2 h-max md:h-[79.4vh]">
          <img
            src={HeroImage}
            alt="Image of a happy shopper"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
