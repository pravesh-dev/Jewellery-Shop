import React from 'react';
import ImagesSection from './ImagesSection';
import ProductInfo from './ProductInfo';

function Hero({ product }) {
  return (
    <div className="pt-20 px-2 pb-5 w-80 mx-auto md:w-max lg:pt-28 xl:px-16">
      <p className="text-sm py-4">
        Shop &gt; {product.type} &gt; {product.title}
      </p>
      <div className='md:flex justify-center gap-20 lg:gap-10 xl:gap-20'>
        <ImagesSection product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default Hero;
