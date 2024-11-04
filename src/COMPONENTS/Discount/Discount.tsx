import React from "react";
import Marquee from "react-fast-marquee";
import Sneakers from "../../ASSETS/sneakers.jpg";
import Laptop from "../../ASSETS/laptop.jpg";
import Drumset from "../../ASSETS/drum set.jpg";

const Discount = () => {
  return (
    <div className="w-full h-max md:h-[80vh]">
      <div className="h-max md:h-[80vh] mx-auto flex flex-col">
        <div className="bg-white">
          <Marquee>
            <div className="flex justify-evenly items-center gap-9 md:space-x-12 h-[5vh] md:h-[7vh] text-red-800 ">
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

        <div className="h-max md:h-[66vh] w-full flex flex-col justify-center items-center my-[15px]">
          <div>
            <h1 className="text-red-800 font-bold text-3xl md:text-5xl text-center">
              20% Discount
            </h1>
            <p className="text-center text-lg md:text-xl pb-[35px]">
              On New Arrivals
            </p>
            <div className="flex gap-3 sm:space-x-10 md:space-x-[70px]">
              <div className="h-[100px] sm:h-[150px] md:h-[200px] w-[100px] sm:w-[150px] md:w-[200px] border-solid rounded-2xl border-[5px] border-red-800 bg-amber-800">
                <img
                  src={Sneakers}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-[100px] sm:h-[150px] md:h-[200px] w-[100px] sm:w-[150px] md:w-[200px] border-solid rounded-2xl border-[5px] border-red-800 bg-blue">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={Laptop}
                  alt=""
                />
              </div>
              <div className="h-[100px] sm:h-[150px] md:h-[200px] w-[100px] sm:w-[150px] md:w-[200px] border-solid rounded-2xl border-[5px] border-red-800 bg-blue">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={Drumset}
                  alt=""
                />
              </div>
            </div>
          </div>
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
