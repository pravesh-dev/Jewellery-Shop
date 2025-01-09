import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../Components/ProductsData';

function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const foundProduct = items.find(item => item.id === parseInt(id))
    setProduct(foundProduct)
  }, [id])

  return (
    <>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          {product.onSale && <p>Discount: {product.discount}%</p>}
        </div>
      )}
      {!product && <p>Product not found</p>}
    </>
  )
}

export default ProductPage
