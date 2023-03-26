import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function Product({
  idss,
  heading,
  image,
  image_title,
  price,
  color,
  text_color,
}: any) {
  console.log(`http://localhost:1337${image}`);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center">
        <img
          src={`http://localhost:1337${image}`}
          alt={image_title}
          width={220}
          height={220}
        />
      </div>
      <div className="items-center">
        <h2 className="text-center text">{heading}</h2>
        <p className="text-center font-semibold text-lg">{price}</p>
        <div className="flex space-x-2 items-center w-full justify-center">
          <div
            className={`bg-[#${color}] w-fit p-2 text-${text_color} rounded-lg`}
          >
            <AiOutlineHeart className="w-5 h-5" />
          </div>
          <div
            className={`bg-[#${color}] w-fit p-2 text-${text_color} rounded-lg items-center`}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
