import React, { useContext, useEffect, useState } from 'react'
import image from "../images/images.png";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img1 from "../images/moon.png"
import img2 from "../images/sun.png";
import { MenuContext } from '../ContextAPI/MenuContext';

const Header = () => {

  const {filterdata,allrestaurants}=useContext(MenuContext);
  const cartitems=useSelector(store=>store.cart.items);
  const [usertheme,setusertheme]=useState("light");
  const [search,setsearch]=useState('');
  useEffect(()=>{
    if(usertheme==="dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }

  },[usertheme])

  const handlethemeswitch=()=>{
    setusertheme(usertheme==="dark"?"light":"dark");
  }
  return (
    <div>
      <div className='flex flex-row justify-between shadow-lg text-2xl bg-slate-100 dark:bg-[#24292f] dark:text-white font-Open font-semibold'>
        <Link to="/"><div><img src={image} className='cursor-pointer  w-40 h-20 dark:invert'/></div></Link>
        <div className='flex gap-x-10 items-center'>
            <Link to="/" onClick={()=>{allrestaurants()}}><div className='cursor-pointer p-3'>Home</div></Link>
            <a href='#footer' className='cursor-pointer p-3'>About Us</a>
            <div className='cursor-pointer p-3'>Contact</div>
        </div>
        <div className='flex flex-row gap-x-5 mx-2 items-center mr-20'>
            <div>
                <input value={search} onChange={(e)=>setsearch(e.target.value)} onKeyDown={(e)=>{if(e.key==='Enter') filterdata(search)}} type='text' placeholder='Search' className='outline-none border-b-2 rounded-lg dark:text-black py-1 text-xl rounded-lg leading-tight px-3 box-border'/>
            </div>
            <div className='flex'>
              <Link to="./cart"><div><AiOutlineShoppingCart className=' cursor-pointer text-2xl'/></div></Link>
              <div >
                {
                  cartitems.length>0?
                  (<p className='relative -top-3 right-2 text-center bg-green-600 rounded-full w-6 h-6 text-sm text-white'>{cartitems.length}</p>):
                  (<p></p>)
                }
              </div>
            </div>
            <div className='dark:hidden'><img onClick={()=>{handlethemeswitch()}} src={img1} className='w-7 h-7 cursor-pointer'/></div>
            <div className='hidden dark:block '><img onClick={()=>{handlethemeswitch()}} src={img2} className='w-7 h-7 cursor-pointer'/></div>

            <div><FaUserCircle className='cursor-pointer text-3xl'/></div>
        </div>
      </div>
    </div>
  )
}

export default Header
