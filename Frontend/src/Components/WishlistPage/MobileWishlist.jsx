import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

// Function to render the MobileWishlist component
function MobileWishlist() {
  const { wishlist, removeFromWishlist, addToCart, products } = useContext(ShopContext);
  const navigate = useNavigate()

  // Get all wishlist products
  const wishlistProducts = wishlist.map(id => products.find(item => item._id === id)).filter(Boolean);

  if (wishlistProducts.length === 0) {
      return <div className='min-h-[60vh] text-center text-lg mt-6'>Your wishlist is empty</div>;
  }
  return (
    <div className='w-full min-h-screen mt-3'>
      {wishlistProducts.map((product) => (
        <div key={product._id} className='w-full flex gap-6 justify-between mb-6'>
          <div className='w-[7.6rem] h-[6.8rem] overflow-hidden rounded-md' onClick={() => navigate(`/shop/product/${product._id}`)}>
            <img src={product.image[0]} className='w-full h-full object-cover' alt="product image" loading='lazy' />
          </div>
          <div className='flex flex-col w-40'>
            <h1 className='text-[1rem] font-bellefair leading-4'>{product.name}</h1>
            <h2 className='font-Cormorant text-primary text-[0.72rem] italic'>In stock</h2>
            <div className='flex gap-5'>
              <button onClick={() => removeFromWishlist(product._id)} className='text-[#A0A0A0] text-[0.75rem] font-bellefair'>Remove</button>
              <button className='text-[#A0A0A0] text-[0.75rem] font-bellefair'>Share</button>
            </div>
            <div className='flex items-center gap-5 mb-2'>
              <span className='font-lora text-[0.7rem] bg-[#FF0000] text-accent py-[0.13rem] px-4 rounded-[0.23rem]'>{product.onSale ? `${product.discount}% Off` : `N/A`}</span>
              <h3 className="text-[1rem] font-bellefair">
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
            <button onClick={() => addToCart(product._id)} className='text-sm text-accent bg-secondary px-5 py-1 rounded-[5px] w-full'>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MobileWishlist
