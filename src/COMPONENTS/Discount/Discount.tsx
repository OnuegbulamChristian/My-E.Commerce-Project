import React from "react";
import Marquee from "react-fast-marquee";

const Discount = () => {
  return (
    <div className="w-full h-max md:h-[80vh] bg-black">
      <div className="h-max md:h-[80vh] mx-auto flex flex-col">
        <div className="bg-white">
          <Marquee>
            <div className="flex justify-evenly items-center gap-7 md:space-x-12 h-[5vh] md:h-[7vh] text-red-800">
              <p className="w-max">Special Offer</p>
              <p className="w-max">Special Offer</p>
              <p className="w-max">Special Offer</p>
              <p className="w-max">Special Offer</p>
              <p className="w-max hidden sm:block">Special Offer</p>
              <p className="w-max hidden sm:block">Special Offer</p>
              <p className="w-max hidden md:block">Special Offer</p>
              <p className="w-max hidden md:block">Special Offer</p>
            </div>
          </Marquee>
        </div>

        <div className="h-max md:h-[66vh]">
          <img src="" alt="" />
          <h1>Discount Sales</h1>
        </div>

        <div className="bg-white">
          <Marquee direction={"right"}>
            <div className="flex justify-evenly items-center gap-7 md:space-x-12 h-[5vh] md:h-[7vh] text-red-800">
              <p className="w-max">Special Offer</p>
              <p className="w-max">Special Offer</p>
              <p className="w-max">Special Offer</p>
              <p className="w-max">Special Offer</p>
              <p className="w-max hidden sm:block">Special Offer</p>
              <p className="w-max hidden sm:block">Special Offer</p>
              <p className="w-max hidden md:block">Special Offer</p>
              <p className="w-max hidden md:block">Special Offer</p>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Discount;
