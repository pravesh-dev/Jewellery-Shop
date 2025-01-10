import React from 'react';

function Hero({ product }) {
  return (
    <div className="pt-20 px-2 pb-5 w-80 mx-auto">
      <p className="text-sm py-4">
        Shop &gt; {product.type} &gt; {product.title}
      </p>
      <div>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full h-80 overflow-hidden rounded-xl">
            <img
              src={product.image}
              className="w-full h-full object-cover"
              alt="product image"
            />
          </div>
          <div className="w-full flex gap-2">
            {product.extraImages.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className="w-1/4 h-20 overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="other product related image"
                />
              </div>
            ))}
            {product.extraImages.length === 4 && (
              <div className="w-1/4 h-20 overflow-hidden rounded-lg">
                <img
                  src={product.extraImages[3]}
                  className="w-full h-full object-cover"
                  alt="other product related image"
                />
              </div>
            )}
            {product.extraImages.length > 4 && (
              <div className="w-1/4 h-20 overflow-hidden rounded-lg flex items-center justify-center bg-gray-100 text-sm font-medium">
                +{product.extraImages.length - 3} more
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
