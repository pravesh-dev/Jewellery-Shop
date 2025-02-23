import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

function OrderPage() {
    const { items, currency } = useContext(ShopContext);
  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:pt-32 lg:px-10 xl:px-32'>
      <h2 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem]">
          My orders
        </h2>
        <div className='flex flex-col gap-4'>
            {
                items.slice(1,4).map((item, index)=>{
                    return (
                        <div key={index} className='card p-4 flex w-full justify-between'>
                            <div className='flex gap-4'>
                                <div>
                                    <img src={item.image} alt={item.name} className='w-10' />
                                </div>
                                <div>
                                    <div className='mb-2'>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className='mb-2'>
                                        <p>Price: {item.price} {currency}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div>
                                        <p>Purchase Date: {item.purchaseDate}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p>Tracking Status: Ready to Ship</p>
                            </div>
                            <div className='mt-4'>
                                <button className='bg-primary text-white py-2 px-4 rounded'>Track Order</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default OrderPage
