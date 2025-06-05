import { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom';

function OrderPage() {
    const { products, currency, token, setToken } = useContext(ShopContext);

  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:pt-32 lg:px-10 xl:px-32'>
      <h2 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem]">
          My orders
        </h2>
        <div className='flex flex-col gap-4'>
            {
                products.slice(1,4).map((item, index)=>{
                    return (
                        <div key={index} className='card py-4 flex w-full justify-between items-start border-b lg:py-2'>
                            <div className='flex gap-3 flex-col xs:flex-row lg:gap-5'>
                                <div className='w-16 h-20 overflow-hidden'>
                                    <img src={item.image[0]} alt={item.name} className='w-full h-full object-cover' />
                                </div>
                                <div className='text-[0.7rem] lg:text-[0.9rem]'>
                                    <div className='mb-1 text-[0.8rem] lg:text-[1.05rem]'>
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
                            <div className='mt-6 xs:m-0 xs:self-center'>
                                <p className='text-[0.7rem] lg:text-[0.9rem]'> <span className='w-2 h-2 rounded-full bg-green-500 inline-block mr-1'></span> Ready to Ship</p>
                            </div>
                            <div className='mt-5 xs:m-0 xs:self-center'>
                                <button className='bg-primary text-white py-1 px-2 text-[0.6rem] rounded lg:py-2 lg:px-4 lg:text-[0.7rem]'>Track Order</button>
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
