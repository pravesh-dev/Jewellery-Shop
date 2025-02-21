import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import OrderSummary from './OrderSummary';

function PlaceOrder() {
  const { cartData, setCartData, items, currency, cartItems } = useContext(ShopContext);
  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = items.find((item) => item.id === parseInt(itemId));
        if (product) {
          tempData.push({
            ...product,
            quantity: cartItems[itemId], // Fetching actual quantity from context
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, items]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:pt-32 xl:px-16'>
      <div>
      <h1 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem] lg:text-[2rem]">
          Delivery information
        </h1>
        <form className='space-y-2'>
            <div className='flex w-full space-x-2'>
                <input className='w-1/2 h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.firstName} onChange={handleInputChange} name="firstName" type="text" placeholder='First name' required autoComplete='off' />
                <input className='w-1/2 h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.lastName} onChange={handleInputChange} name="lastName" type="text" placeholder='Last name' required autoComplete='off' />
            </div>
            <input className='w-full h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.email} onChange={handleInputChange} name="email" type="email" placeholder='Email address' required autoComplete='off' />
            <input className='w-full h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.street} onChange={handleInputChange} name="street" type="text" placeholder='Street' required autoComplete='off' />
            <div className='flex w-full space-x-2'>
                <input className='w-1/2 h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.city} onChange={handleInputChange} name="city" type="text" placeholder='City' required autoComplete='off' />
                <input className='w-1/2 h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.state} onChange={handleInputChange} name="state" type="text" placeholder='State' required autoComplete='off' />
            </div>
            <div className='flex w-full space-x-2'>
                <input className='w-1/2 h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.zipcode} onChange={handleInputChange} name="zipcode" type="text" placeholder='Zipcode' required autoComplete='off' />
                <input className='w-1/2 h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.country} onChange={handleInputChange} name="country" type="text" placeholder='Country' required autoComplete='off' />
            </div>
            <input className='w-full h-10 border border-y-2 border-black/20 outline-none text-[0.8rem] pl-2' value={formData.phone} onChange={handleInputChange} name="phone" type="number" placeholder='Phone' required autoComplete='off' />
        </form>
        </div>
        <div>
          <OrderSummary cartData={cartData} currency={currency} />
          <div></div>
        </div>
    </div>
  )
}

export default PlaceOrder
