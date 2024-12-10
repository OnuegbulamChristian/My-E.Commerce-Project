import React from "react";
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdVerified } from "react-icons/md";

const OurPolicy = () => {
  return (
    <div className="w-full h-max md:h-[50vh]">
      <div className="w-[95%] h-max md:h-[50vh] mx-auto flex flex-col md:flex-row justify-around gap-12 md:gap-2 text-center py-20 text-sm md:text-xl text-black">
        <div>
          <RiExchangeFundsLine className="text-4xl m-auto mb-5" />
          <p className="font-semibold text-red-800 prata-regular">
            Easy Exchange Policy
          </p>
          <p className="text-xs md:text-sm">
            We offer hassle free exchange policy
          </p>
        </div>

        <div>
          <MdVerified className="text-4xl m-auto mb-5" />
          <p className="font-semibold text-red-800 prata-regular">
            7 Days Return Policy
          </p>
          <p className="text-xs md:text-sm">
            We provide 7 days free return policy
          </p>
        </div>

        <div>
          <MdOutlineSupportAgent className="text-4xl m-auto mb-5" />
          <p className="font-semibold text-red-800 prata-regular">
            Best Customer Support
          </p>
          <p className="text-xs md:text-sm">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
