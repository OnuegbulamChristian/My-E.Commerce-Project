import React from "react";
import Marquee from "react-fast-marquee";
import SalesImage from "../../ASSETS/sales sample.jpg";

const Discount = () => {
  return (
    <div className="w-full h-max md:h-[80vh]">
      <div className="h-max md:h-[80vh] mx-auto flex flex-col">
        <div className="bg-white">
          <Marquee>
            <div className="flex justify-evenly items-center gap-9 md:space-x-12 h-[5vh] md:h-[7vh] text-red-800">
              <p className="w-max font-bold font-serif">Special Offer</p>
              <p className="w-max font-bold font-serif">Special Offer</p>
              <p className="w-max font-bold font-serif">Special Offer</p>
              <p className="w-max font-bold font-serif hidden sm:block">
                Special Offer
              </p>
              <p className="w-max hidden sm:block font-bold font-serif">
                Special Offer
              </p>
              <p className="w-max hidden mdm:block font-bold font-serif">
                Special Offer
              </p>
              <p className="w-max hidden md:block font-bold font-serif">
                Special Offer
              </p>
              <p className="w-max hidden md:block font-bold font-serif">
                Special Offer
              </p>
            </div>
          </Marquee>
        </div>

        <div className=" bg-red-400 h-max md:h-[66vh] w-full">
          <div className=" h-max md:h-[66vh] w-full ">
            <img
              src={SalesImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="h-0 text-yellow-500 font-bold relative top-[-160px] sm:top-[-250px] md:top-[-230px] text-5xl font-serif text-center">
            Discount Sales
          </h1>
        </div>

        <div className="bg-white">
          <Marquee direction={"right"}>
            <div className="flex justify-evenly items-center gap-9 md:space-x-12 h-[5vh] md:h-[7vh] text-red-800">
              <p className="w-max font-bold font-serif">Special Offer</p>
              <p className="w-max font-bold font-serif">Special Offer</p>
              <p className="w-max font-bold font-serif">Special Offer</p>
              <p className="w-max font-bold font-serif hidden sm:block">
                Special Offer
              </p>
              <p className="w-max hidden sm:block font-bold font-serif">
                Special Offer
              </p>
              <p className="w-max hidden mdm:block font-bold font-serif">
                Special Offer
              </p>
              <p className="w-max hidden md:block font-bold font-serif">
                Special Offer
              </p>
              <p className="w-max hidden md:block font-bold font-serif">
                Special Offer
              </p>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Discount;
