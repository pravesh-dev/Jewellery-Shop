import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../Components/ProductsData';
import Hero from '../Components/ProductPage/Hero';

function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const foundProduct = items.find(item => item.id === parseInt(id))
    setProduct(foundProduct)
  }, [id])

  return (
    <div className=''>
      {product && (
        <div>
          <Hero product={product} />
        </div>
      )}
      {!product && <div className='w-full h-screen flex justify-center items-center'>
      <p className='text-2xl font-bellefair'>Product not found</p>
      </div>}
    </div>
  )
}

export default ProductPage
