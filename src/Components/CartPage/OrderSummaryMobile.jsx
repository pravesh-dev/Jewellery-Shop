import React, { useContext } from 'react'
import OrderSummary from './OrderSummary'
import { ShopContext } from '../../Context/ShopContext'

function OrderSummaryMobile() {
    const { cartData, currency } = useContext(ShopContext);
  return (
    <div className='min-h-screen pt-20 pr-5 pl-5'>
      <OrderSummary cartData={cartData} currency={currency} />
    </div>
  )
}

export default OrderSummaryMobile
