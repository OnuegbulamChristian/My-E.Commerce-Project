import axios from "axios";
import { useEffect, useState } from "react";
import CartegoryImage1 from "../../ASSETS/monitor screen.png";
import { Link } from "react-router-dom";

function Cartegories() {
  const [getCategories, setGetCategories] = useState<any>({});

  console.log(getCategories);
  useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/category"
      );

      setGetCategories(data);
    };
    fetchData();
  }, []);
  return (
    <div className="h-max md:h-[80vh]">
      <div className="w-[96%] md:w-[98%] h-max md:h-[80vh] mx-auto flex flex-col gap-1 justify-center items-center text-red-800 py-[15px]">
        <h1 className="pb-[15px] md:pb-[25px] font-bold text-[30px] sm:text-[40px] md:text-[50px] text-black font-serif">
          Shop Now
        </h1>
        {getCategories?.products?.map((items: any) => (
          <>
            <div className="h-[10vh] sm:h-[12vh] md:h-[10vh] w-[100%] flex justify-between items-center border-solid border-[2px] border-black rounded-[10px] px-[15px]">
              <h1 className="font-bold text-base sm:text-xl font-serif">
                {items?.category}
              </h1>
              <Link to={"/Shop"}>
                <button className="w-[100px] sm:w-[130px] h-[6.5vh] sm:h-[8vh] md:h-[6.5vh] bg-red-800 font-medium sm:font-bold rounded-[6.5px] text-xs sm:text-sm text-white font-serif">
                  View Products
                </button>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Cartegories;
