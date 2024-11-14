import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import FooterLogo from "../../ASSETS/logo white.png";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-max md:h-[30vh] bg-red-800">
      <div className="h-max md:h-[30vh] w-[95%] flex flex-col justify-center items-center gap-[12px] md:gap-[24px] text-white mx-auto py-[20px]">
        <div className="flex justify-between items-center w-[90%]">
          {/* <div className="flex flex-shrink-0 items-center w-[170px] h-[50px]">
            <img
              src={FooterLogo}
              alt=""
              className="w-full h-full object-cover mt-4"
            />
          </div> */}
          <p className="w-[100%] sm:w-[100%] text-xs sm:text-base pr-[10px]">
            Shop for Original and Quality Items at The Best Prices
          </p>
          <div className="flex gap-[3px] md:gap-[8px] md:text-2xl">
            <FaInstagramSquare />
            <IoLogoWhatsapp />
            <FaXTwitter />
            <FaFacebookSquare />
          </div>
        </div>

        <div className="w-[95%] h-[1px] md:h-[2px] bg-white"></div>

        <div className="flex justify-between items-center w-[90%]">
          <p>© 2024 Shopifi, Inc. All rights reserved.</p>
          <button>
            <FaChevronUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
