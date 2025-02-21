import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

function OrderPage() {
    const { items, currency } = useContext(ShopContext);
  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:pt-32 lg:px-10 xl:px-32'>
      <h2 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem]">
          My orders
        </h2>
        <div>
            {
                items.slice(1,4).map((item, index)=>{
                    <div key={index} className=''>

                    </div>
                })
            }
        </div>
    </div>
  )
}

export default OrderPage
