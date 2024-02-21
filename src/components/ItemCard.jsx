import React, { useContext, useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { additemtocart, removeitem } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';
import vegimg from "../images/veg.webp";
import nonveg from "../images/nonveg.webp";
import defalt from "../images/default.webp";
import { MenuContext } from '../ContextAPI/MenuContext';
import {auth} from "../firebase"


const ItemCard = ({ data, visible }) => {
    const [pric, setpric] = useState(0);
    const [imgg, setimgg] = useState(null);
    const cartitems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    var { freq } = useContext(MenuContext);
    const {vegonly,setvegonly}=useContext(MenuContext);

    const user = auth.currentUser;

    function handleadditem(item) {

        if(user!==null && user!==undefined){
            dispatch(additemtocart(item));
            toast.success("Added to cart !", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
        else{
            toast.success("Login/Use Demo Login !", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }

    function handleremoveitem(item) {
        dispatch(removeitem(item));
    }

    useEffect(() => {
        setimgg(data?.dish?.info?.imageId || data?.card?.info?.imageId);
        setpric(data?.card?.info?.price || data?.dish?.info?.price);
        if (pric === null) {
            setpric(parseInt(data?.card?.info?.defaultPrice));
        }
    }, [data]);

    if(vegonly===true && !(data?.card?.info?.isVeg || data?.dish?.info?.isVeg)){
        return ;
    }

    return (
         <div className={`${visible ? 'hidden' : 'flex'} font-Open`}>
            <div className='flex border-b-2 py-10 justify-between items-center w-[350px] sm:w-[500px] md:w-[650px] lg:w-[800px] mx-auto'>
                <div>
                    <div>{data?.card?.info?.isVeg || data?.dish?.info?.isVeg ?
                        (data?.card?.info?.isVeg || data?.dish?.info?.isVeg === 1 ? (<p><img src={vegimg} className='w-4 h-4' alt="veg" /></p>)
                            : (<p><img src={nonveg} className='w-4 h-4' alt="non-veg" /></p>)) :
                        (<p></p>)
                    }
                    </div>
                    <p class="text-lg capitalize w-full text-zinc-700 font-semibold dark:text-slate-300">{data?.card?.info?.name || data?.dish?.info?.name}</p>
                    <div>{
                        pric !== null && pric !== undefined ?
                            <p class="text-[#206213] text-lg font-thin dark:text-green-500">₹{pric / 100}</p> :
                            <p></p>
                    }</div>
                    <p className='w-[250px] sm:w-[300px] md:w-[450px] lg:w-[590px] capitalize text-[17px] text-neutral-500 dark:text-neutral-400'>{data?.card?.info?.description || data?.dish?.info?.description}</p>
                </div>
                <div className='rounded-lg relative'>
                    {
                        (data?.card?.info?.imageId || data?.dish?.info?.imageId) ?
                            (<p className='ml-3 md:ml-11'>
                                <img src={CDN_URL + imgg} alt='' className=' rounded-lg' />
                                {freq[data?.card?.info?.id] === undefined && <button onClick={() => handleadditem(data?.card || data?.dish)} className='border-2 dark:border-gray-950 text-green-500 rounded-md px-1 sm:px-2 md:px-3 py-1 absolute -bottom-4 z-10 bg-slate-100 dark:dark:bg-[#1f2020] right-4 sm:right-10'>
                                    <span>ADD</span>
                                    </button>
                                }
                                {(freq[data?.card?.info?.id] || freq[data?.dish?.info?.id]) && 
                                <button className='border-2 dark:border-gray-950 text-green-500 rounded-md px-1 md:px-2 py-1 absolute -bottom-4 z-10 bg-slate-100 dark:dark:bg-[#1f2020] right-4 sm:right-10 flex justify-between'>
                                    <span onClick={() => handleremoveitem(data?.card?.info?.id || data?.dish?.info?.id)} className="font-extrabold px-1 md:px-1.5">-</span>
                                    <span className="font-extrabold px-1 md:px-1.5 text-center">{freq[data?.card?.info?.id] || freq[data?.dish?.info?.id]}</span>
                                    <span onClick={() => handleadditem(data?.card || data?.dish)} className="font-extrabold px-1 md:px-1.5">+</span>
                                </button>}</p>) :
                            (<p class="mr-9">
                                <img src={defalt} alt='' className='rounded-lg w-full scale-125' />
                                {freq[data?.card?.info?.id] === undefined && <button onClick={() => handleadditem(data?.card || data?.dish)} className='border-2 dark:border-gray-950 text-green-500 rounded-md px-1 sm:px-2 md:px-3 py-1 absolute -bottom-4 z-10 bg-slate-100 dark:dark:bg-[#1f2020] right-8 sm:right-10'>
                                    <span>ADD</span>
                                    </button>
                                }
                                {freq[data?.card?.info?.id] && <button onClick={() => handleadditem(data?.card || data?.dish)} className='border-2 dark:border-gray-950 text-green-500 rounded-md px-1 md:px-2 py-1 absolute -bottom-4 z-10 bg-slate-100 dark:dark:bg-[#1f2020] right-8 sm:right-10 flex justify-between'>
                                <span onClick={() => handleremoveitem(data?.card?.info?.id || data?.dish?.info?.id)} className="font-extrabold px-1 md:px-1.5">-</span>
                                    <span className="font-extrabold px-1 md:px-1.5 text-center">{freq[data?.card?.info?.id] || freq[data?.dish?.info?.id]}</span>
                                    <span onClick={() => handleadditem(data?.card || data?.dish)} className="font-extrabold px-1 md:px-1.5">+</span>
                                </button>}</p>)
                    }
                </div>
            </div>
        </div>
        
    )
}

export default ItemCard
