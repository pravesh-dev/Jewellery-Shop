import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import stripe from '../../Assets/stripe.png'
import razorpay from '../../Assets/razorpay.png'

function PlaceOrder() {
  const { checkout, currency } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');
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
      <div className='mb-10'>
      <h2 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem] lg:text-[2rem]">
          Delivery information —
        </h2>
        <form className='space-y-2 font-bellefair'>
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
        <h2 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem] lg:text-[2rem]">
          cart totals —
        </h2>
        <div className='flex justify-between items-center text-[0.8rem] font-mulish py-1 border-b'>
          <h3>Subtotal</h3>
          <p>{checkout.totalPrice ? `${currency} ${checkout.totalPrice}` : 'N/A'}</p>
        </div>
        <div className='flex justify-between items-center text-[0.8rem] font-mulish py-1 border-b'>
          <h3>Shipping Fee</h3>
          <p>{checkout.shippingCost ? `${currency} ${checkout.shippingCost}` : 'N/A'}</p>
        </div>
        <div className='flex justify-between items-center text-[0.8rem] font-mulish font-semibold py-1'>
          <h3>Total</h3>
          <p>{checkout.totalCost ? `${currency} ${checkout.totalCost}` : 'N/A'}</p>
        </div>
        </div>
        <h2 className="text-primary uppercase text-stroke-1 mb-4 mt-5 font-bellefair text-[0.75rem] tracking-wider lg:text-[2rem]">
          payment method —
        </h2>
        <div className='flex flex-col gap-2 items-start mb-5'>
          <div className='h-7 px-3 flex gap-4 items-center border' onClick={()=>{setMethod('stripe')}}>
            <p className={`w-3 h-3 rounded-full border flex-shrink-0 ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
            <img className='w-12' src={stripe} alt="stripe logo" />
          </div>
          <div className='h-7 px-3 flex gap-4 items-center border' onClick={()=>{setMethod('razorpay')}}>
            <p className={`w-3 h-3 rounded-full border flex-shrink-0 ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
            <img className='w-12' src={razorpay} alt="razorpay logo" />
          </div>
          <div className='h-7 px-3 flex gap-4 items-center border' onClick={()=>{setMethod('cod')}}>
            <p className={`w-3 h-3 rounded-full border flex-shrink-0 ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
            <p className='uppercase text-[0.6rem] font-mulish font-semibold'>cash on delivery</p>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder
