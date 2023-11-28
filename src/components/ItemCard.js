import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { additemtocart } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const ItemCard = ({data,visible}) => {
    const [pric,setpric]=useState(0);
    const [imgg,setimgg]=useState(null);
    const cartitems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();

    function handleadditem(item){
        dispatch(additemtocart(item));
        toast.success("Added to cart !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    useEffect(()=>{
        setimgg(data?.dish?.info?.imageId || data?.card?.info?.imageId);
        setpric(data?.card?.info?.price || data?.dish?.info?.price);
        if(pric===null){
            setpric(parseInt(data?.card?.info?.defaultPrice));
        }
    },[data]);

  return (
      <div className={`${visible ? 'hidden' : 'flex'} font-Open`}>
       <div className='flex border-b-2 py-10 justify-between items-center w-[800px] mx-auto'>
        <div>
            <p>{data?.card?.info?.name || data?.dish?.info?.name}</p>
            <div>{
                pric!==null && pric!==undefined?
                <p>₹{pric/100}</p>:
                <p></p>
            }</div>
            <p className='w-[600px]'>{data?.card?.info?.description || data?.dish?.info?.description}</p>
        </div>
        <div className='rounded-lg w-28 h-20'>
    {
            (data?.card?.info?.imageId || data?.dish?.info?.imageId)?
            (<p>
                <img src={CDN_URL+imgg} alt='' className='w-full h-full scale-110 object-cover rounded-lg'/>
                <button onClick={() => handleadditem(data?.card)} className='border-2 dark:border-gray-950 text-green-500 rounded-md px-3 py-1 relative -top-2 z-10 bg-slate-100 dark:dark:bg-[#1f2020] left-4'><span className="relative -top-3 left-14 font-extrabold">+</span><span className="mr-3 font-extrabold">ADD</span></button>
            </p>):
            (<p>
                <button onClick={()=>handleadditem(data?.card)} className='border-2 text-green-500 dark:border-gray-950 rounded-md px-3 py-1 relative z-10 bg-slate-100 dark:dark:bg-[#1f2020] left-4'><span className="relative -top-3 left-14 font-extrabold">+</span><span className="mr-3 font-extrabold">ADD</span></button>
            </p>)
        }
        </div>
       </div>
    </div>
  )
}

export default ItemCard
