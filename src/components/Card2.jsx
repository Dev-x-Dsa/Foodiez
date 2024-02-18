import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { additemtocart, removeitem, clearcart } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';
import defalt from "../images/default.webp";

const Card2 = ({ cartitem }) => {
    const [pric, setpric] = useState(0);
    const dispatch = useDispatch();
    var freq = useSelector(store => store.cart.itemQuantities);


    useEffect(() => {
        localStorage.setItem("Cart-freq", JSON.stringify(freq));
    }, [freq]);

    if (JSON.stringify(freq) === '{}') {
        freq = JSON.parse(localStorage.getItem('Cart-freq'));
    }
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
        <div className=''>
            <div className="relative">
                <div className='flex  2xl:flex-row dark:border-[#798283] py-[1.825rem] justify-between items-center mx-auto font-Open'>
                    <button onClick={() => handleclearcart(cartitem?.info?.id)} className='h-7 w-7 absolute top-[0.75rem] z-10  right-[1.125rem] text-lg font-extrabold'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="22" height="22" viewBox="-2 -1 23 24" stroke-width="3" stroke="#e60b0b" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>
                    <div className='rounded-lg mr-1 lg:mr-2 2xl:mr-4 hidden md:block relative md:min-w-[25%] lg:w-[20%]'>
                        {
                            cartitem?.info?.imageId ?
                                (<p>
                                    <img src={CDN_URL + cartitem?.info?.imageId} alt='' className=' rounded-lg  border-red-400 border-5' />
                                </p>) :
                                (<p>
                                    <img src={defalt} alt='' className='rounded-lg w-full scale-[130%] pl-9 pr-10  border-red-400 border-5' />
                                </p>)
                        }
                    </div>

                    <div className='pl-1'>
                        <p class="text-lg capitalize w-full text-zinc-700 font-semibold dark:text-slate-300">{cartitem?.info?.name}</p>
                        <div>{
                            pric !== null && pric !== undefined ?
                                <p class="text-[#206213] text-lg font-thin dark:text-green-500">₹{pric / 100}</p> :
                                <p class="text-[#206213] text-lg font-thin dark:text-green-500" >₹{130}</p>
                        }</div>
                        <p className='w-[225px] md:w-[300px] lg:w-[400px]  text-sm lg:text-xl capitalize dark:text-[#a6abb3] text-zinc-600'>{cartitem?.info?.description}</p>
                    </div>
                    <div className="flex flex-col mx-3">
                        <div className='flex justify-center items-center mx-5'>
                            <button className='bg-green-100 w-5 h-5 flex items-center justify-center rounded-md border-green-300 border hover:bg-green-200 dark:bg-green-800 dark:border-green-600 dark:hover:bg-green-900' onClick={() => { handleadditem(cartitem) }}>+</button>
                            <div className='mx-2 font-semibold text-lg '>{freq[cartitem?.info?.id]}</div>
                            <button className='bg-red-100 w-5 h-5 flex items-center justify-center rounded-md border-red-300 border hover:bg-red-200 dark:bg-red-800 dark:border-red-600 dark:hover:bg-red-900' onClick={() => { handleremoveitem(cartitem?.info?.id) }}>-</button>
                        </div>
                        <div className='flex justify-center items-center pt-4 dark:text-blue-300 text-[#252536] font-bold text-xl'>
                            <span>₹</span>{
                                pric !== null && pric !== undefined ?
                                    freq[cartitem?.info?.id] * pric / 100 :
                                    freq[cartitem?.info?.id] * 130
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2
