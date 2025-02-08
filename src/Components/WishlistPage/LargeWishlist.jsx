import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

function LargeWishlist() {
    const { wishlist, removeFromWishlist, addToCart, items } = useContext(ShopContext);

    // Get all wishlist products
    const wishlistProducts = wishlist.map(id => items.find(item => item.id === id)).filter(Boolean);

    if (wishlistProducts.length === 0) {
        return <div className='min-h-[60vh] text-center text-lg mt-6'>Your wishlist is empty</div>;
    }

    return (
        <div className='w-full min-h-screen mt-3 lg:mt-6'>
            {/* Headings */}
            <div className="grid grid-cols-12 mb-4">
                <div className="col-span-5">
                    <h2 className="text-[0.75rem] text-dark lg:text-[1.12rem] font-lora">Product Details</h2>
                </div>
                <div className="col-span-4 grid grid-cols-3 gap-2 font-lora">
                    <h3 className="text-[0.7rem] text-dark text-center lg:text-[1.12rem]">Deal</h3>
                    <h3 className="text-[0.7rem] text-dark text-center lg:text-[1.12rem]">Price</h3>
                    <h3 className="text-[0.7rem] text-dark text-center lg:text-[1.12rem]">Stock Status</h3>
                </div>
                <div className="col-span-3 text-center">
                    <h3 className="text-[0.7rem] text-dark lg:text-[1.12rem]">Actions</h3>
                </div>
            </div>

            {/* Wishlist Items */}
            {wishlistProducts.map((product) => (
                <div key={product.id} className='grid grid-cols-12 mb-6 border-t pt-4'>
                    <div className='col-span-5 flex items-start gap-2 lg:gap-10'>
                        <div className='w-[7.6rem] flex-shrink-0 h-[6.8rem] lg:w-[12rem] lg:h-[10.9rem] rounded-[5px] overflow-hidden'>
                            <img src={product.image} className='w-full h-full object-cover' alt="product thumbnail" loading='lazy' />
                        </div>
                        <div className='font-bellefair pt-2 lg:pt-4'>
                            <h1 className='text-[1rem] leading-4 lg:leading-7 lg:text-[1.5rem]'>{product.name}</h1>
                            <div className='flex gap-2 lg:gap-5'>
                                <button onClick={() => removeFromWishlist(product.id)} className='text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]'>Remove</button>
                                <button className='text-[#A0A0A0] text-[0.75rem] lg:text-[1.12rem]'>Share</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-4 grid grid-cols-3 gap-2 text-center pt-2 lg:pt-4'>
                      <span>
                        <span className='font-lora text-[0.7rem] py-[0.13rem] px-3 rounded-[0.23rem] text-accent bg-[#ff0000] lg:text-[1rem]'>
                            {product.onSale ? `${product.discount}% Off` : `N/A`}
                      </span>
                        </span>
                        <h3 className="text-[1rem] font-bellefair">
                            {product.onSale ? (
                                <div className="flex flex-col -space-y-1">
                                    <span>
                                        ${" "}{(product.price - product.price * (product.discount / 100)).toFixed(2)}
                                    </span>
                                    <span className="line-through text-gray-600">
                                        $ {product.price}
                                    </span>
                                </div>
                            ) : (
                                <span>$ {product.price}</span>
                            )}
                        </h3>
                        <h3 className='font-Cormorant text-primary text-[0.72rem] italic lg:text-[1.12rem]'>In stock</h3>
                    </div>

                    <div className='col-span-3 flex justify-center pt-2 lg:pt-4'>
                        <button onClick={() => addToCart(product.id)} className='text-sm text-accent bg-secondary px-5 py-1 rounded-[5px] lg:text-[1.12rem] lg:p-0 lg:w-[8.5rem] lg:h-[2.5rem]'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LargeWishlist;
