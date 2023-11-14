import React from 'react'
import image from "../images/images.png";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const cartitems=useSelector(store=>store.cart.items);

  return (
    <div>
      <div className='flex flex-row justify-between shadow-lg text-xl mb-10'>
        <Link to="/"><div><img src={image} className='cursor-pointer  w-40 h-20'/></div></Link>
        <div className='flex gap-x-10 items-center'>
            <Link to="/"><div className='cursor-pointer'>Home</div></Link>
            <div className='cursor-pointer'>About Us</div>
            <div className='cursor-pointer'>Contact</div>
        </div>
        <div className='flex flex-row gap-x-5 mx-2 items-center mr-20'>
            <div>
                <input type='text' placeholder='Search' className=' outline-none border-b-2'/>
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
            <div><FaUserCircle className=' cursor-pointer text-3xl'/></div>
        </div>
      </div>
    </div>
  )
}

export default Header
