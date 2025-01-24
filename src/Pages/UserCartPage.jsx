import React from 'react'
import { items } from '../Components/ProductsData';
import ShoppingCart from '../Components/CartPage/ShoppingCart';

function UserCartPage() {
  return (
    <div>
      <div className='hidden md:block'>
      <ShoppingCart items={items} />
      </div>
    </div>
  )
}

export default UserCartPage
