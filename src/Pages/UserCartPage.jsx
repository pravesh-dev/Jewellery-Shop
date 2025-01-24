import React from 'react'
import { items } from '../Components/ProductsData';
import ShoppingCart from '../Components/CartPage/ShoppingCart';

function UserCartPage() {
  return (
    <div>
      <ShoppingCart items={items} />
    </div>
  )
}

export default UserCartPage
