import React from "react";
import ReviewImage from "../../ASSETS/reviewimage.png";

const CustomerReview = () => {
  return (
    <div className="h-max md:h-[50vh]">
      <div className="h-max md:h-[50vh] w-[95%] flex flex-col mx-auto justify-center items-center text-center py-[15px] font-serif">
        <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[50px]">
          Reviews
        </h1>
        <p className="w-[75%]  text-xs sm:text-base py-[10px] md:py-[20px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sint
          velit ab explicabo totam natus. Quo maiores, magnam aperiam quam ea
          vitae! Quos ipsam vel doloribus aperiam, dolore iste voluptate.
        </p>
        <div className="w-[100px] h-[100px] rounded-[100%] border-solid border-[3px] border-red-800">
          <img
            src={ReviewImage}
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-[100%]"
          />
        </div>
        <h4 className="pt-[10px] font-bold text-lg">John Doe</h4>
      </div>
    </div>
  );
};

export default CustomerReview;
