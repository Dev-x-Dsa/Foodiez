import React, { useContext, useEffect, useState } from 'react'
import image from "../images/images.webp";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img1 from "../images/moon.webp"
import img2 from "../images/sun.webp";
import { MenuContext } from '../ContextAPI/MenuContext';
import { FaCircleUser } from "react-icons/fa6";
import { auth } from "../firebase"
import { toast } from 'react-toastify';
import "../App.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";



const Header = () => {

  const [showham,setshowham]=useState(false);
  const { filterdata, allrestaurants,onsidebarclick,setonsidebarclick} = useContext(MenuContext);
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

  const generateInitials = (name) => {
    const words = name.split(' ');
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join('');
  };

  const user = auth.currentUser;


  var name = "";
  if (user && user !== null && user !== undefined && user.displayName) {
    name = generateInitials(user.displayName);
  }

  function favclick() {
    toast.success("Login/Use Demo Login !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function setvalue(){
    setonsidebarclick(prev=>!prev);
    setshowham(prev=>!prev)
  }
  return (
    <div>
      <div className='fixed z-50 top-0 w-full hidden md:flex flex-row justify-between header-main text-2xl bg-[#f6f8fc] dark:bg-[#24292f]  text-zinc-700 dark:text-slate-300 font-Open font-semibold'>
        <Link to="/"><div><img src={image} className='cursor-pointer  w-40 h-20 dark:invert' /></div></Link>
        <div className='flex gap-x-1  md:gap-x-2 lg:gap-x-6 xl:gap-x-12 2xl:gap-x-20 items-center justify-end '>
          <Link to="/" onClick={() => { allrestaurants() }}><div className='cursor-pointer header-main-c'>Home</div></Link>
          <Link to="/about"><p className='cursor-pointer header-main-c'>About Us</p></Link>
          <Link to="/contact"><div className='cursor-pointer header-main-c'>Contact</div></Link>
        </div>
        <div className='flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-5 mx-2 items-center ml-4 md:ml-6 lg:ml-12 2xl:ml-20'>
          <div>
            <input value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') filterdata(search) }} type='text' placeholder='Search' className='outline-none border-b-2 rounded-full w-[8rem] lg:w-[12rem] xl:w-[16rem] 2xl:w-[24rem] dark:text-black py-1 font-medium leading-tight px-2 lg:px-4 mx-1 lg:mx-3 box-border' />
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
          {
            (user && user !== null && user !== undefined && user.displayName) ?
              (
                <Link to="/favourite restuarants">
                  <div className='cursor-pointer dark:invert-0 invert'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d1cdcd" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                  </div>
                </Link>
              ) :
              (
                <div onClick={() => { favclick() }} className='cursor-pointer dark:invert-0 invert'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d1cdcd" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </div>
              )
          }
          <div className='dark:hidden'><img onClick={() => { handlethemeswitch(); }} src={img1} className='w-7 h-7 cursor-pointer' /></div>
          <div className='hidden dark:block'><img onClick={() => { handlethemeswitch(); }} src={img2} className='w-7 h-7 cursor-pointer' /></div>

          <Link to="/login-signuppage">
            <div class="cursor-pointer pr-2">{
              name === "" ?
                (<FaCircleUser className='w-8 h-8' />) :
                (<p className="text-center bg-white text-black rounded-full w-[35px] h-[35px] flex items-center text-lg justify-center mx-auto">{name}</p>)
            }
            </div>
          </Link>
        </div>
      </div>
      <div className=' fixed z-50 top-0 w-full flex flex-row md:hidden justify-between header-main text-2xl bg-[#f6f8fc] dark:bg-[#24292f]  text-zinc-700 dark:text-slate-300 font-Open font-semibold'>
        {/* Hamburger code will be there */}
        {/* left side icon of hamburger will be there */}
        <div className={`${showham?"hidden":"block"} pt-5 pl-5`}>
          <RxHamburgerMenu onClick={()=>setvalue()} />
        </div>
        <div on className={`${showham?"flex":"hidden"} flex-row`}>
            <div className='fixed h-full w-[50%] top-0 left-0 bg-[#f6f8fc] dark:bg-[#24292f]   rounded-md px-4 py-2 flex flex-col gap-y-2 pt-5'>
              <RxCross2 className='w-7 h-7' onClick={()=>setvalue()}/>
              <div className='flex flex-col mx-auto gap-y-3'>
              <Link to="/login-signuppage">
                  {
                    (user && user !== null && user !== undefined && user.displayName) ?
                    (<div>
                      <div class="cursor-pointer pr-2 my-5">{
                          name === "" ?
                            (<FaCircleUser className='w-8 h-8' />) :
                            (<p className="text-center bg-white text-black rounded-full w-[35px] h-[35px] flex items-center text-lg justify-center mx-auto">{name}</p>)
                        }
                      </div>
                        MyProfile
                    </div>):
                    (<div>
                      SignUp
                    </div>)
                  }
              </Link>
                <Link to="/" onClick={() => { allrestaurants() }}><div className='cursor-pointer'>Home</div></Link>
                <Link to="/about"><p className='cursor-pointer'>About Us</p></Link>
                <Link to="/contact"><div className='cursor-pointer'>Contact</div></Link>
                <div className='relative dark:hidden'>
                  <div>Theme</div>
                  <img onClick={() => { handlethemeswitch(); }} src={img1} className='w-7 h-7 cursor-pointer absolute right-0 -top-[0.01rem]' />
                </div>
                <div className='relative hidden dark:block'>
                  <div>Theme</div>
                  <img onClick={() => { handlethemeswitch(); }} src={img2} className='w-7 h-7 cursor-pointer absolute right-0 -top-[0.01rem]' />
                </div>

                <Link to="./cart"><div>Cart</div></Link>
                {
                  (user && user !== null && user !== undefined && user.displayName) ?
                  (
                    <Link to="/favourite restuarants"><div>Favourites</div></Link>
                  ):
                  (<div onClick={()=>favclick()}>
                    <div>Favourites</div>
                  </div>)
                }
              </div>
          </div>
        </div>

        {/* right side image fav icon will be there only */}
        <Link to="/">
          <div>
            <img src={image} className='cursor-pointer  w-40 h-20 dark:invert'/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
