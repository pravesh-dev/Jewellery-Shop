import React from 'react'

function LargeWishlist({items}) {
    const [product, setProduct] = [items[3]]
  return (
    <div className='w-full min-h-screen mt-3 lg:mt-6 xl:px-16'>
      <div className='grid grid-cols-12'>
        <div className='col-span-5 space-y-6'>
            <h2 className='text-[0.75rem] lg:text-[1.12rem] font-lora'>Product Details</h2>
            <div className='flex items-start gap-2'>
                <div className='w-[7.6rem] flex-shrink-0 h-[6.8rem] lg:w-[12rem] lg:h-[10.9rem] rounded-[5px] overflow-hidden'>
                    <img src={product.image} className='w-full h-full object-cover' alt="product thumbnail" loading='lazy' />
                </div>
                <div className='font-bellefair pt-5 space-y-2'>
                    <h1 className='text-[1rem] leading-4 lg:leading-7 lg:text-[1.5rem]'>{product.name}</h1>
                    <div className='flex gap-2'>
                        <button className='text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]'>Remove</button>
                        <button className='text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]'>Share</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-4 space-y-6'>
            <div className='grid grid-cols-3 gap-2 font-lora'>
                <h3 className='text-[0.7rem] text-center'>Deal</h3>
                <h3 className='text-[0.7rem] text-center'>Price</h3>
                <h3 className='text-[0.7rem] text-center'>Stock Status</h3>
            </div>
            <div className='h-[6.8rem] grid content-start py-5 grid-cols-3 gap-2'>
            <span className='font-lora text-center'><span className='text-[0.7rem] py-[0.13rem] px-3 rounded-[0.23rem] text-accent bg-[#ff0000]'>{product.onSale ? `${product.discount}% Off` : `N/A`}</span></span>
            <h3 className="text-[1rem] font-bellefair text-center">
              {product.onSale ? (
                <div className="flex flex-col -space-y-1">
                  <span>
                    ${" "}
                    {(
                    product.price -
                    product.price * (product.discount / 100)
                    )}
                  </span>
                  <span className="line-through text-gray-600">
                    $ {product.price}
                  </span>
                </div>
              ) : (
              <span>$ {product.price}</span>
              )}
            </h3>
            <h3 className='font-Cormorant text-primary text-center text-[0.72rem] italic'>In stoke</h3>
            </div>
        </div>
        <div className='col-span-3 flex pt-14 items-start justify-center'>
        <button className='text-sm text-accent bg-secondary px-5 py-1 rounded-[5px]'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default LargeWishlist
