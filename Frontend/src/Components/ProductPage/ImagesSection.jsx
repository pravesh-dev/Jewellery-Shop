import React from "react";

function ImagesSection({product}) {
  return (
    <div className="w-72 flex flex-col gap-3 md:w-80 lg:w-96 xl:w-[26.4rem] xl:gap-4">
      <div className="w-full h-80 overflow-hidden rounded-xl lg:h-96 xl:h-[24.7rem]">
        <img
          src={product.image}
          className="w-full h-full object-cover"
          alt="product image"
        />
      </div>
      <div className="w-full flex gap-2 xl:justify-between">
        {product.extraImages.slice(0, 3).map((img, index) => (
          <div key={index} className="w-1/4 h-20 overflow-hidden rounded-lg lg:h-20 xl:h-[5.8rem] xl:rounded-xl xl:w-[5.9rem]">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="other product related image"
            />
          </div>
        ))}
        {product.extraImages.length === 4 && (
          <div className="w-1/4 h-20 overflow-hidden rounded-lg lg:h-20 xl:h-[5.8rem] xl:rounded-xl xl:w-[5.9rem]">
            <img
              src={product.extraImages[3]}
              className="w-full h-full object-cover"
              alt="other product related image"
            />
          </div>
        )}
        {product.extraImages.length > 4 && (
          <div className="w-1/4 h-20 overflow-hidden rounded-lg flex items-center justify-center border border-dark text-sm font-mulish lg:h-20 xl:text-[1rem] xl:h-[5.8rem] xl:rounded-xl xl:w-[5.9rem]">
            +{product.extraImages.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagesSection;
