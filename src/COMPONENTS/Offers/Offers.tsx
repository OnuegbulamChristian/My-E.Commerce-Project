import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";

const Offers = () => {
  return (
    <div className="h-max md:h-96 bg-slate-200">
      <div className="w-11/12 h-max md:h-96 flex flex-wrap sm:flex-nowrap gap-3 md:space-x-10 mx-auto justify-center items-center py-6">
        <div className="bg-red-800 w-full md:w-72 h-48 md:h-60 rounded-2xl text-white flex flex-col justify-center items-start pl-10 md:pl-4">
          <CiDeliveryTruck className="text-5xl" />
          <h1 className="py-3 font-bold font-serif text-2xl">Free Shipping</h1>
          <p className="font-serif w-10/12 md:w-full">
            Enjoy seamless shopping with our complimentary shipping service.
          </p>
        </div>

        <div className="bg-red-800 w-full md:w-72 h-48 md:h-60 rounded-2xl text-white flex flex-col justify-center items-start pl-10 md:pl-4">
          <MdOutlineSecurity className="text-5xl" />
          <h1 className="py-3 font-bold font-serif text-2x">Secure Payment</h1>
          <p className="font-serif w-10/12 md:w-full">
            Experience worry-free transactions with our secure payment options.
          </p>
        </div>

        <div className="bg-red-800 w-full md:w-72 h-48 md:h-60 rounded-2xl text-white flex flex-col justify-center items-start pl-10 md:pl-4">
          <MdOutlineHelpOutline className="text-5xl" />
          <h1 className="py-3 font-bold font-serif text-2x">Need Help</h1>
          <p className="font-serif w-10/12 md:w-full">
            Our dedicated team is here to assist you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
