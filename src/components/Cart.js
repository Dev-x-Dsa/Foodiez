import React from 'react'
import Card2 from './Card2';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartitems=useSelector(store=>store.cart.items);
  console.log(cartitems);
  return (
    <div className='pt-32'>
        {
            cartitems.length!==0?
            (
                cartitems.map((cartitem)=>{
                    return <Card2 cartitem={cartitem}/>
                })
            ):
            (<p className='text-center font-bold text-3xl'>
              Your Cart is Empty
            </p>)
        }
    </div>
  )
}

export default Cart
