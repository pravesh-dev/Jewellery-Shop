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
                        <div key={index} className='card py-4 flex w-full justify-between items-start border-b'>
                            <div className='flex gap-3 flex-col'>
                                <div className='w-16 h-20 overflow-hidden'>
                                    <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                                </div>
                                <div className='text-[0.7rem]'>
                                    <div className='mb-1'>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className='mb-1 flex items-center gap-3'>
                                        <p>{currency} {item.price}</p>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div>
                                        <p>Date: <span className='text-black/40'>26/02/2025</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p className='text-[0.7rem]'> <span className='w-2 h-2 rounded-full bg-green-500 inline-block'></span> Ready to Ship</p>
                            </div>
                            <div className='mt-5'>
                                <button className='bg-primary text-white py-1 px-2 text-[0.6rem] rounded'>Track Order</button>
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
