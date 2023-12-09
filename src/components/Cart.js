import React, { useEffect, useState } from 'react'
import Card2 from './Card2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from "../images/cartfinal.png"
import img1 from "../images/loadcrop.gif";
import img2 from "../images/finalcrop.gif";

const Cart = () => {

  const [check, setcheck] = useState("hidden");
  const [check2, setcheck2] = useState("visible");
  const [ohover, sethover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setcheck("visible");
      setcheck2("hidden");
    }, 3880);
  }, []);

  useEffect(() => {
    if (ohover === true) {
      setcheck("hidden");
      setcheck2("visible");
      setTimeout(() => {
        setcheck("visible");
        setcheck2("hidden");
        sethover(false);
      }, 3500);
    }
  }, [ohover]);

  var total = 0;
  var freq1 = 0;
  const cartitems = useSelector(store => store.cart.items);
  const uniquecartitems = [...new Set(cartitems)];
  const freq = useSelector(store => store.cart.itemQuantities);
  return (
    <div className='dark:bg-[#0d1117] dark:text-white py-10 font-Open min-h-[370px] max-h-full'>
      <div>
        {
          uniquecartitems.length !== 0 ?
            (
              uniquecartitems.map((cartitem) => {
                freq1 += freq[cartitem?.info?.id];
                cartitem?.info?.price ? (total = total + (parseInt(cartitem?.info?.price) / 100) * freq[cartitem?.info?.id]) : (total += (130 * freq[cartitem?.info?.id]))
                return <Card2 cartitem={cartitem} />
              })
            ) :
            (<div className='flex flex-col items-center py-10 dark:text-white  '>
              <img src={img1} className={`w-[400px] pb-7  ${check2}`} />
              <img onPointerOver={() => { sethover(true) }} src={img2} className={`w-[400px] pb-7  ${check}`} />
              <p className=' font-bold text-2xl'>Oops... Cart is empty</p>
              <p className='text-[#78716c]'>Feeling Hungry...</p>
              <Link to="/">
                <button className='mt-4 rounded-full text-white border-2 p-2 text-xl bg-[#ff2400] px-6 dark:border-slate-700'>Order Now</button>
              </Link>
            </div>)
        }
      </div>
      <div>
        {
          cartitems.length !== 0 ?
            (<div className='text-center text-3xl my-4'>
              <p class="capitalize w-full text-zinc-700 font-medium dark:text-slate-300">Total Items : <span class="text-[#206213] font-thin dark:text-green-500">{freq1}</span></p>
              <p class="capitalize w-full text-zinc-700 font-medium dark:text-slate-300">Total Price : <span class="text-[#206213] font-thin dark:text-green-500">₹{total}</span></p>
            </div>) :
            (<p className='dark:text-black text-white'></p>)
        }
      </div>
    </div>
  )
}

export default Cart
