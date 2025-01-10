import React from "react";
import { IoStarSharp } from "react-icons/io5";

function ProductInfo({ product }) {
  return (
    <div className="w-full font-bellefair py-4">
      <h1 className="text-3xl">{product.name}</h1>
      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center text-lg">
          <IoStarSharp className="text-secondary" />
          <IoStarSharp className="text-secondary" />
          <IoStarSharp className="text-secondary" />
          <IoStarSharp className="text-secondary" />
          <IoStarSharp className="text-secondary" />
        </div>
        <p className="text-lg font-lora">20 reviews</p>
      </div>
      <h2 className="text-black text-lg my-3">
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
    </div>
  );
}

export default ProductInfo;
