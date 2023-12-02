import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { additemtocart, removeitem } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const Card2 = ({cartitem}) => {
    const [pric,setpric]=useState(0);
    const dispatch=useDispatch();
    const freq=useSelector(store=>store.cart.itemQuantities);


    useEffect(()=>{
        setpric(cartitem?.info?.price);
        if(pric===null){
            setpric(parseInt(cartitem?.info?.defaultPrice));
        }
    },[cartitem]);
    
    function handleadditem(item){
        dispatch(additemtocart(item));
    }
      
    function handleremoveitem(item){
        dispatch(removeitem(item));
    }

  return (
    <div>
          <div className='flex border-b-2 border-[#a8bbbf] dark:border-[#798283] py-10 justify-between items-center w-[800px] mx-auto font-Open'>
        <div>
            <p>{cartitem?.info?.name}</p>
            <div>{
                pric!==null && pric!==undefined?
                <p>₹{pric/100}</p>:
                <p>₹{130}</p>
            }</div>
            <p className='w-[600px]'>{cartitem?.info?.description}</p>
        </div>
        <div className='flex'>
            <p onClick={()=>{handleadditem(cartitem)}}>+</p>
            <span className='mx-2'>{freq[cartitem?.info?.id]}</span>
            <p onClick={()=>{handleremoveitem(cartitem?.info?.id)}}>-</p>
        </div>
        <div className='rounded-lg w-28 h-20'>
    {
        cartitem?.info?.imageId?
            (<p>
                <img src={CDN_URL+cartitem?.info?.imageId} alt='' className='w-full h-full object-cover rounded-lg scale-110'/>
                <button onClick={() => handleremoveitem(cartitem?.info?.id)} className='border-2 dark:border-gray-950 text-green-500 rounded-md px-3 py-1 relative -top-2 z-10 bg-slate-100 dark:dark:bg-[#1f2020] left-5'><span className="relative -top-3 left-14">-</span><span className="mr-3 font-extrabold">REM</span></button>
            </p>):
            (<p>
                <button onClick={() => handleremoveitem(cartitem?.info?.id)} className='border-2 text-green-500 dark:border-gray-950 rounded-md px-3 py-1 relative z-10 bg-slate-100 dark:dark:bg-[#1f2020] left-5'><span className="relative -top-3 left-14">—</span><span className="mr-3 font-extrabold">REM</span></button>
            </p>)
        }
        </div>
       </div>
    </div>
  )
}

export default Card2
