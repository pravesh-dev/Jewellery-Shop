import React, { useState } from 'react'

function PlaceOrder() {

  const [formData, setFormData] = useState({
    name: '',
    
  })

  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:pt-32 xl:px-16'>
      <h1 className="text-primary uppercase text-stroke-1 mb-1 font-bellefair text-[1.12rem] lg:text-[2rem]">
          Delivery information
        </h1>
        <form>
            <div className='flex w-full'>
                <input className='w-1/2 h-10 border outline-none text-[0.8rem] pl-2' value={formData.firstName} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="text" placeholder='First name' required autoComplete='off' />
                <input className='w-1/2 h-10 border outline-none text-[0.8rem] pl-2' value={formData.lastName} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="text" placeholder='Last name' required autoComplete='off' />
            </div>
            <input className='w-full h-10 border outline-none text-[0.8rem] pl-2' value={formData.email} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="email" placeholder='Email address' required autoComplete='off' />
            <input className='w-full h-10 border outline-none text-[0.8rem] pl-2' value={formData.street} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="text" placeholder='Street' required autoComplete='off' />
            <div className='flex w-full'>
                <input className='w-1/2 h-10 border outline-none text-[0.8rem] pl-2' value={formData.city} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="text" placeholder='City' required autoComplete='off' />
                <input className='w-1/2 h-10 border outline-none text-[0.8rem] pl-2' value={formData.state} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="text" placeholder='State' required autoComplete='off' />
            </div>
            <div className='flex w-full'>
                <input className='w-1/2 h-10 border outline-none text-[0.8rem] pl-2' value={formData.zipcode} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="text" placeholder='Zipcode' required autoComplete='off' />
                <input className='w-1/2 h-10 border outline-none text-[0.8rem] pl-2' value={formData.country} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="text" placeholder='Country' required autoComplete='off' />
            </div>
            <input className='w-full h-10 border outline-none text-[0.8rem] pl-2' value={formData.name} onChange={(e)=>{setFormData(...formData, e.target.name = e.target.value)}} type="number" placeholder='Phone' required autoComplete='off' />
        </form>
    </div>
  )
}

export default PlaceOrder
