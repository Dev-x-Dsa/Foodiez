import React, { useEffect, useState } from 'react'
import image from "../images/images.png";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img1 from "../images/moon.png"
import img2 from "../images/sun.png";

const Header = () => {

  const cartitems=useSelector(store=>store.cart.items);
  const [usertheme,setusertheme]=useState("light");
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
    <div className='fixed w-full bg-white z-50'>
      <div className='flex flex-row justify-between shadow-lg text-xl dark:bg-black dark:text-white'>
        <Link to="/"><div><img src={image} className='cursor-pointer  w-40 h-20'/></div></Link>
        <div className='flex gap-x-10 items-center'>
            <Link to="/"><div className='cursor-pointer'>Home</div></Link>
            <div className='cursor-pointer '>About Us</div>
            <div className='cursor-pointer'>Contact</div>
        </div>
        <div className='flex flex-row gap-x-5 mx-2 items-center mr-20'>
            <div>
                <input type='text' placeholder='Search' className=' outline-none border-b-2 rounded-lg dark:text-black py-1 text-xl leading-tight px-3 box-border'/>
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
            <div className='hidden dark:block'><img onClick={()=>{handlethemeswitch()}} src={img2} className='w-7 h-7 cursor-pointer'/></div>

            <div><FaUserCircle className='cursor-pointer text-3xl'/></div>
        </div>
      </div>
    </div>
  )
}

export default Header
