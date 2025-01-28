import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { SlLock } from "react-icons/sl";
import { AiFillGolden } from "react-icons/ai";
import { IoTrophySharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";

function ProductInfo({ product }) {

  const [isHeart, setIsHeart] = useState(false);

  // Function to render stars based on the average rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <IoStarSharp
          key={i}
          className={`${i <= rating ? "text-secondary" : "text-gray-300"} lg:text-2xl xl:text-4xl`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-full font-bellefair py-4 md:py-0  md:w-[60%]">
      <h1 className="text-3xl xl:text-[2rem]">{product.name}</h1>
      <div className="flex gap-2 items-center lg:my-1 xl:m3-4 xl:gap-4">
        <div className="flex gap-1 items-center text-lg xl:gap-2">
          {renderStars(Math.round(product.reviews.averageRating))}
        </div>
        <p className="text-sm font-lora lg:text-base xl:text-[1.12rem]">{product.reviews.totalReviews} reviews</p>
      </div>
      <h2 className="text-black text-xl my-3 lg:text-2xl xl:mt-4">
        {product.onSale ? (
          <div className="flex gap-3">
            <span className="text-black/50 line-through text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem]">
              $ {product.price}
            </span>
            <span>
              ${" "}
              {(
                product.price -
                product.price * (product.discount / 100)
              )}
            </span>
          </div>
        ) : (
          <span>$ {product.price}</span>
        )}
      </h2>
      <p className="lg:text-xl lg:mb-10 xl:text-[1.13rem] xl:mb-6 xl:leading-[1.3rem] xl:tracking-[1.2px]">{product.description}</p>
      <div className="w-72 flex my-3 md:w-96 xl:gap-9 xl:w-[28rem]">
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full lg:text-base xl:text-xl"><TbTruckDelivery /></span>
            <h3 className="font-lora text-xs text-center xl:text-sm">Free Delivery</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full lg:text-base xl:text-xl"><SlLock /></span>
            <h3 className="font-lora text-xs text-center xl:text-sm">Secure Transaction</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full lg:text-base xl:text-xl"><AiFillGolden /></span>
            <h3 className="font-lora text-xs text-center xl:text-sm">24 Carat
            Gold</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full lg:text-base xl:text-xl"><IoTrophySharp /></span>
            <h3 className="font-lora text-xs text-center xl:text-sm">Top Brand</h3>
        </div>
      </div>
      <div className="w-72 h-10 flex gap-4 md:w-96 lg:mt-8 lg:h-11 xl:h-12">
        <button className="w-[80%] h-full capitalize rounded-sm text-xl text-center bg-secondary hover:bg-[#B0890A] duration-300 text-white lg:text-2xl lg:w-[80%] lg:rounded-md xl:text-stroke-xs xl:text-[1.5rem]">Add to cart</button>
        <button className={`w-[20%] h-full rounded-sm text-xl flex justify-center items-center ${isHeart ? 'bg-[#B0890A] text-[#C80003]' : 'text-accent bg-secondary'} lg:text-2xl lg:w-[20%] lg:rounded-md xl:text-3xl`} onClick={()=>{setIsHeart(!isHeart)}}><IoMdHeart /></button>
      </div>
    </div>
  );
}

export default ProductInfo;
