import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import FooterLogo from "../../ASSETS/getdon enterprise 2.png";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-max md:h-[30vh] bg-red-800">
      <div className="h-max md:h-30vh] w-[95%] flex flex-col justify-center items-center gap-[6px] md:gap-[12px] text-white mx-auto  bg-black">
        <div className="flex justify-between items-center gap-[10px] md:gap-[80px] w-[90%] py-auto">
          <div className="w-[140px] md:w-[500px] h-[70px] md:h-[100px]">
            <img
              src={FooterLogo}
              alt=""
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <p className="w-[40%] sm:w-[100%] text-sm md:text-base">
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
