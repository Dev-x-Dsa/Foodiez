import React, { useContext, useEffect, useState } from 'react'
import image from "../images/images.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img1 from "../images/moon.png"
import img2 from "../images/sun.png";
import img3 from "../images/pup.png";
import { MenuContext } from '../ContextAPI/MenuContext';

const Header = () => {

  const { filterdata, allrestaurants } = useContext(MenuContext);
  const cartitems = useSelector(store => store.cart.items);
  const uniquecartitems = [...new Set(cartitems)];

  const [usertheme, setusertheme] = useState(localStorage.getItem('Mode') || "dark");
  const [search, setsearch] = useState('');

  useEffect(() => {
    if (localStorage.getItem('Mode') === undefined) {
      setusertheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('Mode', usertheme);
    }
    else {
      console.log(localStorage.getItem('Mode'));
      document.documentElement.classList.add(localStorage.getItem('Mode'));
    }
  }, [])
  useEffect(() => {
    if (usertheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem('Mode', usertheme);
    }
    else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('Mode', usertheme);
    }

  }, [usertheme])

  const handlethemeswitch = () => {
    setusertheme(usertheme === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <div className='flex flex-row justify-between shadow-lg text-2xl bg-slate-100 dark:bg-[#24292f]  text-zinc-700 dark:text-slate-300 font-Open font-semibold'>
        <Link to="/"><div><img src={image} className='cursor-pointer  w-40 h-20 dark:invert' /></div></Link>
        <div className='flex gap-x-10 items-center'>
          <Link to="/" onClick={() => { allrestaurants() }}><div className='cursor-pointer p-3'>Home</div></Link>
          <a href='#footer' className='cursor-pointer p-3'>About Us</a>
          <div className='cursor-pointer p-3'>Contact</div>
        </div>
        <div className='flex flex-row gap-x-5 mx-2 items-center ml-20'>
          <div>
            <input value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') filterdata(search) }} type='text' placeholder='Search' className='outline-none border-b-2 rounded-lg dark:text-black py-1 font-medium leading-tight px-3 box-border' />
          </div>
          <div className='flex'>
            <Link to="./cart"><div><AiOutlineShoppingCart size={33} className='cursor-pointer text-2xl' />
              <div className='absolute' >
                {
                  cartitems.length > 0 ?
                    (<p className='relative -top-10 left-5 text-center bg-green-600 rounded-full w-5 h-5 text-sm text-white'>{uniquecartitems.length}</p>) :
                    (<p></p>)
                }
              </div>
            </div></Link>
          </div>
          <Link to="/favourite restuarants">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </div></Link>
          <div className='dark:hidden'><img onClick={() => { handlethemeswitch(); }} src={img1} className='w-7 h-7 cursor-pointer' /></div>
          <div className='hidden dark:block '><img onClick={() => { handlethemeswitch(); }} src={img2} className='w-7 h-7 cursor-pointer' /></div>

          <div class="cursor-pointer">
            <img class="rounded-full w-8" alt="profile" src={img3}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
