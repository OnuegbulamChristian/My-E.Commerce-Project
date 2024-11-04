import axios from "axios";
import { useEffect, useState } from "react";
import CartegoryImage1 from "../../ASSETS/monitor screen.png";

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
    <div className="w-full h-max md:h-[50vh]">
      <div></div>
    </div>
  );
}

export default Cartegories;
