import React from "react";

function ImagesSection({product}) {
  return (
    <div className="w-full flex flex-col gap-3 md:w-80 lg:w-[27rem] xl:w-[35rem]">
      <div className="w-full h-80 overflow-hidden rounded-xl lg:h-[27rem] xl:h-[35rem]">
        <img
          src={product.image}
          className="w-full h-full object-cover"
          alt="product image"
        />
      </div>
      <div className="w-full flex gap-2">
        {product.extraImages.slice(0, 3).map((img, index) => (
          <div key={index} className="w-1/4 h-20 overflow-hidden rounded-lg lg:h-24 xl:h-32">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="other product related image"
            />
          </div>
        ))}
        {product.extraImages.length === 4 && (
          <div className="w-1/4 h-20 overflow-hidden rounded-lg lg:h-24 xl:h-32">
            <img
              src={product.extraImages[3]}
              className="w-full h-full object-cover"
              alt="other product related image"
            />
          </div>
        )}
        {product.extraImages.length > 4 && (
          <div className="w-1/4 h-20 overflow-hidden rounded-lg flex items-center justify-center border border-dark text-sm font-mulish lg:h-24 xl:h-32">
            +{product.extraImages.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagesSection;
