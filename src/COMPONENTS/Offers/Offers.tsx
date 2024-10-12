import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="h-96 bg-slate-200">
      <div className="flex justify-center items-center gap gap-5 mx-auto w-11/12 h-96">
        <Link to={"/Shop"}>
          <div className="w-72 h-64 text-white flex flex-col justify-center items-start pl-6 rounded-xl bg-red-800">
            <CiDeliveryTruck className="text-5xl " />
            <h1 className="text-2xl font-bold font-serif py-3.5">
              Free Shipping
            </h1>
            <p className="text-sm">
              Enjoy seamless shopping with our complimentary shipping service.
            </p>
          </div>
        </Link>

        <Link to={"/Shop"}>
          <div className="w-72 h-64 text-white flex flex-col justify-center items-start pl-6 rounded-xl bg-red-800">
            <MdSecurity className="text-5xl" />
            <h1 className="text-2xl font-bold font-serif py-3.5">
              Secure Payment
            </h1>
            <p className="text-sm">
              Experience worry-free transactions with our secure payment
              options.
            </p>
          </div>
        </Link>

        <Link to={"/Contact"}>
          <div className="w-72 h-64 text-white flex flex-col justify-center items-start pl-6 rounded-xl bg-red-800">
            <MdOutlineHelpOutline className="text-5xl" />
            <h1 className="text-2xl font-bold font-serif py-3.5">Need Help?</h1>
            <p className="text-sm">
              Our dedicated team is here to assist you every step of the way.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
