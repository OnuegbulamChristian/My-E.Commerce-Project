import React from "react";
import Navbar1 from "../../COMPONENTS/Navbar/Navbar";
import Footer from "../../COMPONENTS/Footer/Footer";

const UserDashboard = () => {
  return (
    <div>
      <Navbar1 />
      <div className="h-auto">
        <div className="h-auto m-auto flex justify-center gap-[15px] items-center mx-auto w-[95%] md:w-[97%]">
          <div className="w-[30%] h-[80vh] flex flex-col justify-between items-start py-[15px] border-solid border-b-2 border-x-2 border-red-800 rounded-b-[10px] pl-[8px] md:pl-[30px] font-serif">
            <ul className="text-sm sm:text-base md:text-lg font-bold flex flex-col gap-[10px]">
              <p className="hover:bg-zinc-100 w-[100px] sm:w-[150px] h-[30px] md:h-[40px] text-center flex items-center justify-start pl-[6px]">
                My Account
              </p>
              <p className="hover:bg-zinc-100 w-[100px] sm:w-[150px] h-[30px] md:h-[40px] text-center flex items-center justify-start pl-[6px]">
                Inbox
              </p>
              <p className="hover:bg-zinc-100 w-[100px] sm:w-[150px] h-[30px] md:h-[40px] text-center flex items-center justify-start pl-[6px]">
                Orders
              </p>
              <p className="hover:bg-zinc-100 w-[100px] sm:w-[150px] h-[30px] md:h-[40px] text-center flex items-center justify-start pl-[6px]">
                Cart
              </p>
              <p className="hover:bg-zinc-100 w-[100px] sm:w-[150px] h-[30px] md:h-[40px] text-center flex items-center justify-start pl-[6px]">
                Saved Items
              </p>
            </ul>
            <button className="w-[100px] md:w-[150px] h-[30px] md:h-[40px] rounded-[6px] md:rounded-[8px] bg-red-800 text-center font-bold text-xs sm:text-base md:text-lg text-white">
              Logout
            </button>
          </div>

          <div className="w-[70%] h-auto flex flex-col justify-center items-start gap-[15px] bg-transparent">
            <div className="bg-zinc-100 mx-auto h-[10vh] sm:h-[12vh] md:h-[10vh] pl-[10px] sm:pl-[20px] w-full flex justify-start items-center">
              <h1 className="font-bold text-base sm:text-xl font-serif">
                Computing
              </h1>
            </div>
            <div className="bg-zinc-100 mx-auto h-[10vh] sm:h-[12vh] md:h-[10vh] pl-[10px] sm:pl-[20px] w-full flex justify-start items-center">
              <h1 className="font-bold text-base sm:text-xl font-serif">
                Musical Instruments
              </h1>
            </div>
            <div className="bg-zinc-100 mx-auto h-[10vh] sm:h-[12vh] md:h-[10vh] pl-[10px] sm:pl-[20px] w-full flex justify-start items-center">
              <h1 className="font-bold text-base sm:text-xl font-serif">
                Health & Beauty
              </h1>
            </div>
            <div className="bg-zinc-100 mx-auto h-[10vh] sm:h-[12vh] md:h-[10vh] pl-[10px] sm:pl-[20px] w-full flex justify-start items-center">
              <h1 className="font-bold text-base sm:text-xl font-serif">
                Home & Office
              </h1>
            </div>
            <div className="bg-zinc-100 mx-auto h-[10vh] sm:h-[12vh] md:h-[10vh] pl-[10px] sm:pl-[20px] w-full flex justify-start items-center">
              <h1 className="font-bold text-base sm:text-xl font-serif">
                Electronics
              </h1>
            </div>
            <div className="bg-zinc-100 mx-auto h-[10vh] sm:h-[12vh] md:h-[10vh] pl-[10px] sm:pl-[20px] w-full flex justify-start items-center">
              <h1 className="font-bold text-base sm:text-xl font-serif">
                Fashion
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
