import React from 'react'

function ProductInfo({product}) {
  return (
    <div className='w-full font-bellefair'>
      <h1 className='text-xl'>{product.name}</h1>
    </div>
  )
}

export default ProductInfo
