import React from 'react';
import ImagesSection from './ImagesSection';
import ProductInfo from './ProductInfo';

function Hero({ product }) {
  return (
    <div className="pt-20 px-2 pb-5 w-80 mx-auto">
      <p className="text-sm py-4">
        Shop &gt; {product.type} &gt; {product.title}
      </p>
      <div>
        <ImagesSection product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default Hero;
