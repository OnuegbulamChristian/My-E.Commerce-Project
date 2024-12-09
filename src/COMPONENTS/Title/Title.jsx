import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-black text-xl md:text-3xl">
        {text1}{" "}
        <span className="text-red-800 font-medium text-xl md:text-3xl">
          {text2}
        </span>
      </p>
      <p className="w-8 md:w-12 h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
