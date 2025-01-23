import React, { useState } from 'react'

function MobileWishlist({items}) {
  const [product, setProduct] = useState(items[0]);
  console.log(product)
  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <div className='w-[7.6rem] h-[6.8rem] overflow-hidden rounded-md'>
          <img src={product.image} className='w-full h-full object-cover' alt="" />
        </div>
        <div>
          <h1 className='text-[1rem] font-bellefair'>{product.name}</h1>
          <h2 className='font-Cormorant text-primary'>In stoke</h2>
          <div>
            <button className='text-[#A0A0A0] text-[0.75rem] font-bellefair'>Remove</button>
            <button className='text-[#A0A0A0] text-[0.75rem] font-bellefair'>Share</button>
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-lora text-[0.7rem] bg-[#FF0000] text-accent py-1 px-4 rounded-[0.23rem]'>{product.onSale ? `${product.discount}% Off` : `N/A`}</span>
            <h3 className="text-[1rem]">
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
          </div>
          <button className='text-sm text-accent bg-secondary px-5 py-1 rounded-[5px]'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default MobileWishlist
