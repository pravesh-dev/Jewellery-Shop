import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { SlLock } from "react-icons/sl";
import { AiFillGolden } from "react-icons/ai";
import { IoTrophySharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";

function ProductInfo({ product }) {
  // Function to render stars based on the average rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <IoStarSharp
          key={i}
          className={`${i <= rating ? "text-secondary" : "text-gray-300"} lg:text-3xl xl:text-4xl`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-full font-bellefair py-4 md:w-80 md:py-0 lg:w-[27rem] xl:w-[35rem]">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl">{product.name}</h1>
      <div className="flex gap-2 items-center lg:my-2 xl:my-4">
        <div className="flex gap-1 items-center text-lg">
          {renderStars(Math.round(product.reviews.averageRating))}
        </div>
        <p className="text-sm font-lora lg:text-lg xl:text-xl">{product.reviews.totalReviews} reviews</p>
      </div>
      <h2 className="text-black text-xl my-3 lg:text-3xl xl:text-[2.5rem] xl:my-8">
        {product.onSale ? (
          <div className="flex gap-3">
            <span className="text-black/50 line-through text-[1rem] lg:text-[1.5rem] xl:text-[2rem]">
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
      <p className="lg:text-2xl lg:mb-10 xl:text-4xl xl:mb-12">{product.description}</p>
      <div className="flex my-3">
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full xl:text-3xl"><TbTruckDelivery /></span>
            <h3 className="font-lora text-xs text-center lg:text-base xl:text-xl">Free Delivery</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full xl:text-3xl"><SlLock /></span>
            <h3 className="font-lora text-xs text-center lg:text-base xl:text-xl">Secure Transaction</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full xl:text-3xl"><AiFillGolden /></span>
            <h3 className="font-lora text-xs text-center lg:text-base xl:text-xl">24 Carat
            Gold</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full xl:text-3xl"><IoTrophySharp /></span>
            <h3 className="font-lora text-xs text-center lg:text-base xl:text-xl">Top Brand</h3>
        </div>
      </div>
      <div className="h-10 flex gap-4 lg:mt-8 lg:h-14 xl:h-20">
        <button className="w-[80%] h-full capitalize rounded-sm text-xl text-center bg-secondary text-white lg:text-3xl lg:rounded-md xl:text-[2.5rem]">Add to cart</button>
        <button className="w-[20%] h-full rounded-sm text-xl flex justify-center items-center bg-secondary text-white lg:text-3xl lg:rounded-md xl:text-5xl"><IoMdHeart /></button>
      </div>
    </div>
  );
}

export default ProductInfo;