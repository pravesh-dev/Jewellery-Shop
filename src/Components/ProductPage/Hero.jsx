import React from 'react';
import ImagesSection from './ImagesSection';
import ProductInfo from './ProductInfo';
import { Link } from 'react-router-dom';

function Hero({ product }) {
  return (
    <section className="pt-20 px-2 pb-5 w-80 mx-auto md:w-max lg:pt-28 xl:px-16">
      <p className="text-sm py-4 text-black/70">
        <Link to='/shop' className='text-black cursor-pointer'>Shop</Link> &gt; {product.type} &gt; {product.title}
      </p>
      <div className='md:flex justify-center gap-20 lg:w-[50rem] lg:justify-between xl:w-[70rem]'>
        <ImagesSection product={product} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}

export default Hero;
