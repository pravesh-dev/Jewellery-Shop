import React from 'react'

function PlaceOrder() {
  return (
    <div className='w-full min-h-screen pt-24 px-2 lg:pt-32 xl:px-16'>
      <h1 className="text-primary uppercase text-stroke-1 mb-1 font-bellefair text-[1.12rem] lg:text-[2rem]">
          Delivery information
        </h1>
        <form>
            <div>
                <input type="text" placeholder='First name' required autoComplete='off' />
                <input type="text" placeholder='Last name' required autoComplete='off' />
            </div>
            <input type="email" placeholder='Email address' required autoComplete='off' />
            <input type="text" placeholder='Street' required autoComplete='off' />
            <div>
                <input type="text" placeholder='City' required autoComplete='off' />
                <input type="text" placeholder='State' required autoComplete='off' />
            </div>
            <div>
                <input type="text" placeholder='Zipcode' required autoComplete='off' />
                <input type="text" placeholder='Country' required autoComplete='off' />
            </div>
            <input type="number" placeholder='Phone' required autoComplete='off' />
        </form>
    </div>
  )
}

export default PlaceOrder
