import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { additemtocart } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';
import vegimg from "../images/veg.png";
import nonveg from "../images/nonveg.png";
import defalt from "../images/default.png";

const ItemCard = ({data,visible}) => {
    const [pric,setpric]=useState(0);
    const [imgg,setimgg]=useState(null);
    const cartitems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();

    function handleadditem(item){
        dispatch(additemtocart(item));
        toast.success("Added to cart !", {
            position: toast.POSITION.BOTTOM_RIGHT,
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
            <div>{data?.card?.info?.isVeg?
                 (data?.card?.info?.isVeg===1?(<p><img src={vegimg} className='w-4 h-4'/></p>)
                 :(<p><img src={nonveg} className='w-4 h-4'/></p>)):
                 (<p></p>)
            } 
            </div>
                <p class="text-lg capitalize w-full text-zinc-700 font-semibold dark:text-slate-300">{data?.card?.info?.name || data?.dish?.info?.name}</p>
            <div>{
                pric!==null && pric!==undefined?
                <p class="text-[#206213] text-lg font-thin dark:text-green-500">₹{pric/100}</p>:
                <p></p>
            }</div>
                  <p className='w-[590px] capitalize text-[17px] text-neutral-500 dark:text-neutral-400'>{data?.card?.info?.description || data?.dish?.info?.description}</p>
        </div>
        <div className='rounded-lg  ml-11 relative'>
    {
            (data?.card?.info?.imageId || data?.dish?.info?.imageId)?
            (<p>
                <img src={CDN_URL+imgg} alt='' className=' rounded-lg'/>
                <button onClick={() => handleadditem(data?.card)} className='border-2 dark:border-gray-950 text-green-500 rounded-md px-3 py-1 absolute -bottom-4 z-10 bg-slate-100 dark:dark:bg-[#1f2020] right-10'><span className="relative -top-3 left-14 font-extrabold">+</span><span className="mr-3 font-extrabold">ADD</span></button>
            </p>):
            (<p>
                <img src={defalt} alt='' className=' rounded-lg' />
                <button onClick={() => handleadditem(data?.card)} className='border-2 dark:border-gray-950 text-green-500 rounded-md px-3 py-1 absolute -bottom-4 z-10 bg-slate-100 dark:dark:bg-[#1f2020] right-10'><span className="relative -top-3 left-14 font-extrabold">+</span><span className="mr-3 font-extrabold">ADD</span></button>
            </p>)
        }
        </div>
       </div>
    </div>
  )
}

export default ItemCard
