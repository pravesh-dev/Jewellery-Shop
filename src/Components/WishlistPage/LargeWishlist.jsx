import React from 'react'

// LargeWishlist component to display product details
function LargeWishlist({items}) {
    // Destructuring the items array to get the product at index 3
    const [product, setProduct] = [items[3]]
  return (
    <div className='w-full min-h-screen mt-3 lg:mt-6'>
      <div className='grid grid-cols-12'>
        <div className='col-span-5 space-y-6 lg:space-y-10'>
            <h2 className='text-[0.75rem] text-dark lg:text-[1.12rem] font-lora'>Product Details</h2>
            <div className='flex items-start gap-2 lg:gap-10'>
                <div className='w-[7.6rem] flex-shrink-0 h-[6.8rem] lg:w-[12rem] lg:h-[10.9rem] rounded-[5px] overflow-hidden'>
                    <img src={product.image} className='w-full h-full object-cover' alt="product thumbnail" loading='lazy' />
                </div>
                <div className='font-bellefair pt-5 space-y-2 lg:space-y-6 lg:pt-10'>
                    <h1 className='text-[1rem] leading-4 lg:leading-7 lg:text-[1.5rem]'>{product.name}</h1>
                    <div className='flex gap-2 lg:gap-5'>
                        <button className='text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]'>Remove</button>
                        <button className='text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]'>Share</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-4 space-y-6 lg:space-y-10'>
            <div className='grid grid-cols-3 gap-2 font-lora'>
                <h3 className='text-[0.7rem] text-dark text-center lg:text-[1.12rem]'>Deal</h3>
                <h3 className='text-[0.7rem] text-dark text-center lg:text-[1.12rem]'>Price</h3>
                <h3 className='text-[0.7rem] text-dark text-center lg:text-[1.12rem]'>Stock Status</h3>
            </div>
            <div className='h-[6.8rem] grid content-start pt-5 grid-cols-3 gap-2 lg:pt-10'>
            <span className='font-lora text-center'><span className='text-[0.7rem] py-[0.13rem] px-3 rounded-[0.23rem] text-accent bg-[#ff0000] lg:text-[1rem]'>{product.onSale ? `${product.discount}% Off` : `N/A`}</span></span>
            <h3 className="text-[1rem] font-bellefair text-center lg:text-[1.12rem]">
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
            <h3 className='font-Cormorant text-primary text-center text-[0.72rem] italic lg:text-[1.12rem]'>In stoke</h3>
            </div>
        </div>
        <div className='col-span-3 flex pt-14 items-start justify-center lg:pt-24'>
        <button className='text-sm text-accent bg-secondary px-5 py-1 rounded-[5px] lg:text-[1.12rem] lg:p-0 lg:w-[8.5rem] lg:h-[2.5rem]'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

// Exporting the LargeWishlist component
export default LargeWishlist
