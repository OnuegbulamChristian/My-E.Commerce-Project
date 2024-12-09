import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import ProductItem from "../Product Item/ProductItem";
import { url } from "node:inspector";

const LatestCollections = () => {
  const [getProducts, setGetProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  console.log(getProducts);

  useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/products"
      );

      setGetProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Slice latest products after fetching
    setLatestProducts(latestProducts.slice(0, 4));
  }, [latestProducts]);

  return (
    <div className="w-full h-max md:h-[130vh] bg-gray-100">
      <div className="w-[95%} h-max md:h-[130vh] mx-auto my-10 flex flex-col justify-center items-center ">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className="w-3/4 m-auto text-xs md:text-sm md:text-base text-black md:w-[60%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            eaque doloribus ex, doloremque atque culpa assumenda nihil officia
            rerum necessitatibus sit fugiat eum saepe soluta, nesciunt maiores
            ut, minus ducimus.
          </p>
        </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 gap-y-6 flex justify-center items-center pl-[20px] md:pl-[40px]">
          {getProducts.map((items: any, index: any) => (
            <ProductItem
              key={index}
              _id={items?._id}
              images={items.images?.map((images: { url: any }) => images.url)}
              name={items?.name}
              price={items?.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollections;
