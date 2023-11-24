import React from 'react'
import Card2 from './Card2';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartitems=useSelector(store=>store.cart.items);
  return (
    <div>
        {
            cartitems.length!==0?
            (
                cartitems.map((cartitem)=>{
                    return <Card2 cartitem={cartitem}/>
                })
            ):
            (<p></p>)
        }
    </div>
  )
}

export default Cart
