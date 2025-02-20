import React from 'react'

function PlaceOrder() {
  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:pt-32 xl:px-16 bg-gray-100 rounded-lg shadow-md'>
      <h1 className="text-primary uppercase text-stroke-1 mb-4 font-bellefair text-[1.12rem] lg:text-[2rem] text-center">
          Delivery information
        </h1>
        <form className='max-w-4xl mx-auto'>
            <div className='flex gap-4 mb-4'>
                <input type="text" placeholder='First name' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                <input type="text" placeholder='Last name' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <input type="email" placeholder='Email address' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4' />
            <input type="text" placeholder='Street' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4' />
            <div className='flex gap-4 mb-4'>
                <input type="text" placeholder='City' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                <input type="text" placeholder='State' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='flex gap-4 mb-4'>
                <input type="text" placeholder='Zipcode' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                <input type="text" placeholder='Country' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <input type="number" placeholder='Phone' required autoComplete='off' className='form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4' />
        </form>
    </div>
  )
}

export default PlaceOrder
