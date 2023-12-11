import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { additemtocart, removeitem, clearcart } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const Card2 = ({ cartitem }) => {
    const [pric, setpric] = useState(0);
    const dispatch = useDispatch();
    const freq = useSelector(store => store.cart.itemQuantities);


    useEffect(() => {
        setpric(cartitem?.info?.price);
        if (pric === null) {
            setpric(parseInt(cartitem?.info?.defaultPrice));
        }
    }, [cartitem]);

    function handleadditem(item) {
        dispatch(additemtocart(item));
    }

    function handleremoveitem(item) {
        dispatch(removeitem(item));
    }
    function handleclearcart(item) {
        dispatch(clearcart(item));
    }

    return (
        <div>
            <div className='flex border-b-2 border-[#a8bbbf] dark:border-[#798283] py-10 justify-between items-center w-[820px] mx-auto font-Open'>
                <div>
                    <p class="text-lg capitalize w-full text-zinc-700 font-semibold dark:text-slate-300">{cartitem?.info?.name}</p>
                    <div>{
                        pric !== null && pric !== undefined ?
                            <p class="text-[#206213] text-lg font-thin dark:text-green-500">₹{pric / 100}</p> :
                            <p class="text-[#206213] text-lg font-thin dark:text-green-500" >₹{130}</p>
                    }</div>
                    <p className='w-[550px] capitalize text-[#a6abb3]'>{cartitem?.info?.description}</p>
                </div>
                <div className='flex justify-center items-center mx-5'>
                    <button className='bg-green-100 w-5 h-5 flex items-center justify-center rounded-md border-green-300 border hover:bg-green-200 dark:bg-green-800 dark:border-green-600 dark:hover:bg-green-900' onClick={() => { handleadditem(cartitem) }}>+</button>
                    <div className='mx-2 font-semibold text-lg '>{freq[cartitem?.info?.id]}</div>
                    <button className='bg-red-100 w-5 h-5 flex items-center justify-center rounded-md border-red-300 border hover:bg-red-200 dark:bg-red-800 dark:border-red-600 dark:hover:bg-red-900' onClick={() => { handleremoveitem(cartitem?.info?.id) }}>-</button>
                </div>
                <div className='rounded-lg  ml-2 relative'>
                    {
                        cartitem?.info?.imageId ?
                            (<p>
                                <img src={CDN_URL + cartitem?.info?.imageId} alt='' className='rounded-lg  border-red-400 border-5' />
                                <button onClick={() => handleclearcart(cartitem?.info?.id)} className='border-2 dark:border-gray-950 text-green-500 rounded-full h-7 w-7 absolute -top-3 z-10 bg-gray-100 dark:dark:bg-[#252525] -right-3 text-lg font-extrabold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="-2 -1 23 24" stroke-width="3" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </button>
                            </p>) :
                            (<p>
                                <button onClick={() => handleclearcart(cartitem?.info?.id)} className='border-2 dark:border-gray-950 text-green-500 rounded-full h-7 w-7 absolute -top-3 z-10 bg-gray-100 dark:dark:bg-[#252525] -right-3 text-lg font-extrabold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="-2 -1 23 24" stroke-width="3" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </button>
                            </p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Card2
