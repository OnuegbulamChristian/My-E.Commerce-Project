import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-max md:h-[40vh]">
      <div
        className="w-[95%] mx-auto h-max md:h-[40vh] flex
      flex-col justify-center items-center text-center py-[20px]"
      >
        <p className="prata-regular text-base text-lg md:text-2xl font-medium text-red-800">
          Subscribe now and get 20% off
        </p>
        <p className="text-black mt-3 w-full md:w-[70%] pb-[20px] text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum aliquam
          corporis qui aspernatur doloremque possimus laborum, delectus nam enim
          quia accusamus blanditiis in! Ab itaque corrupti quo dolorum quae
          doloremque!
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="w-full h-[40px] md:h-[60px] md:w-1/2 flex items-center mx-auto border"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-3 w-[100%] md:w-[100%] md:flex-1 h-[100%]"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-xs md:text-sm px-1 h-full w-[120px] md:w-[180px]"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterBox;
