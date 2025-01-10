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
          className={i <= rating ? "text-secondary" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-full font-bellefair py-4">
      <h1 className="text-3xl">{product.name}</h1>
      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center text-lg">
          {/* Render stars based on the average rating */}
          {renderStars(Math.round(product.reviews.averageRating))}
        </div>
        <p className="text-sm font-lora">{product.reviews.totalReviews} Reviews</p>
      </div>
      <h2 className="text-black text-xl my-3">
        {product.onSale ? (
          <div className="flex gap-3">
            <span className="text-black/50 line-through text-[1rem]">
              $ {product.price}
            </span>
            <span>
              ${" "}
              {(
                product.price -
                product.price * (product.discount / 100)
              ).toFixed(2)}
            </span>
          </div>
        ) : (
          <span>$ {product.price}</span>
        )}
      </h2>
      <p>{product.description}</p>
      <div className="flex my-3">
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full"><TbTruckDelivery /></span>
            <h3 className="font-lora text-xs text-center">Free Delivery</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full"><SlLock /></span>
            <h3 className="font-lora text-xs text-center">Secure Transaction</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full"><AiFillGolden /></span>
            <h3 className="font-lora text-xs text-center">24 Carat
            Gold</h3>
        </div>
        <div className="w-1/4 flex flex-col items-center gap-1">
            <span className="text-xl bg-secondary text-white p-2 rounded-full"><IoTrophySharp /></span>
            <h3 className="font-lora text-xs text-center">Top Brand</h3>
        </div>
      </div>
      <div className="h-10 flex gap-4">
        <button className="w-[80%] h-full rounded-sm text-xl text-center bg-secondary text-white">Add to cart</button>
        <button className="w-[20%] h-full rounded-sm text-xl flex justify-center items-center bg-secondary text-white"><IoMdHeart /></button>
      </div>
    </div>
  );
}

export default ProductInfo;
