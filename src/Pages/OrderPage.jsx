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
                                <div className='w-10 h-full overflow-hidden'>
                                    <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                                </div>
                                <div>
                                    <div className='mb-2'>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className='mb-2 flex items-center gap-3'>
                                        <p>{item.price} {currency}</p>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div>
                                        <p>Date: <span className='text-black/40'>26/02/2025</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p>Ready to Ship</p>
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
