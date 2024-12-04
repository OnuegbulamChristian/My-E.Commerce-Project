import React, { useState } from "react";
import NavLogo from "../../ASSETS/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full h-[10vh] bg-gray-100">
      <div className="flex items-center justify-between font-medium h-[10vh] w-[95%]">
        <div className="w-48 pt-4">
          <img
            src={NavLogo}
            alt="Company Logo"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        {/* navlinks section */}
        <div>
          <ul className="hidden sm:flex gap-5 text-sm text-red-800 font-bold">
            <NavLink to={"/"}>
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>

            <NavLink to={"/collections"}>
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>

            <NavLink to={"/about"}>
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>

            <NavLink to={"/contact"}>
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>
          </ul>
        </div>
        {/* search and profile section */}
        <div className="flex items-center gap-6">
          <CiSearch className="text-2xl cursor-pointer text-red-800" />
          <div className="group relative bg-transparent">
            <IoPerson className="text-2xl cursor-pointer text-red-800" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 border-transparent bg-transparent">
              <div className="flex flex-col gap-2 w-40 py-3 px-3 bg-gray-100 text-red-800 rounded ">
                <p className="cursor-pointer hover:text-black text-xs">
                  My Profile
                </p>
                <p className="cursor-pointer hover:text-black text-xs">
                  Orders
                </p>
                <p className="cursor-pointer hover:text-black text-xs">
                  Logout
                </p>
              </div>
            </div>
          </div>
          {/* cart section */}
          <Link className="relative" to={"/cart"}>
            <FaShoppingCart className="text-2xl text-red-800" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-800 text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
          {/* menu dropdown section */}
          <IoMenu
            className="text-2xl cursor-pointer text-red-800 sm:hidden"
            onClick={() => setVisible(true)}
          />
        </div>
        {/* sidebar menu for small screen */}
        <div
          className={`absolute top-0 right-0 bottom-0 h-max overflow-hidden bg-gray-100 transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-red-800">
            <div
              className="flex items-center p-3 gap-1 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              <RiArrowDropDownLine className="text-2xl rotate-90" />
              <p>Back</p>
            </div>
            <NavLink
              className="py-2 pl-6 border text-xs"
              onClick={() => setVisible(false)}
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              className="py-2 pl-6 border text-xs"
              onClick={() => setVisible(false)}
              to={"/collections"}
            >
              COLLECTION
            </NavLink>
            <NavLink
              className="py-2 pl-6 border text-xs"
              onClick={() => setVisible(false)}
              to={"/about"}
            >
              ABOUT
            </NavLink>
            <NavLink
              className="py-2 pl-6 border text-xs"
              onClick={() => setVisible(false)}
              to={"/contact"}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
