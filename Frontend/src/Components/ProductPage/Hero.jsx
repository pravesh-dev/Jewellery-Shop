import ImagesSection from './ImagesSection';
import ProductInfo from './ProductInfo';
import { Link } from 'react-router-dom';

function Hero({ product }) {
  return (
    <section className="pt-20 px-2 pb-5 w-full flex flex-col mx-auto lg:pt-28 xl:px-16 xl:m-0 md:w-full">
      <p className="text-sm py-4 text-black/70 xl:text-[1rem]">
        <Link to='/shop' className='text-black cursor-pointer'>Shop</Link> &gt; {product.subCategory} &gt; {product.title}
      </p>
      <div className='flex flex-col md:flex-row md:justify-center md:gap-10 lg:justify-between lg:gap-20'>
        <ImagesSection product={product} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}

export default Hero;
