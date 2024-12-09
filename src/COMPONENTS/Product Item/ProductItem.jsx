import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ images, _id, name, price }) => {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/products"
      );
      setProducts(result.data);
    })();
  }, []);

  return (
    <div>
      <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden w-[200px] h-[200px] rounded-2xl border-solid border-[3px] border-red-800">
          <img
            src={images[0]}
            alt=""
            className="hover:scale-110 transition ease-in-out w-full h-full object-contain"
          />
        </div>
        <p className="pt-3 pb-1 text-xs">{name}</p>
        <p className="text-sm font-medium">${price}</p>
      </Link>
    </div>
  );
};

export default ProductItem;
