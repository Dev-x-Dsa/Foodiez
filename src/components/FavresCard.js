import React, { useContext, useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import img1 from "../images/star.webp"
import { LocationContext } from '../ContextAPI/LocationContext';
import { MenuContext } from '../ContextAPI/MenuContext';
import { useDispatch, useSelector } from 'react-redux';
import { additemtocart } from '../Redux/Slices/CartSlice';
import { additemtofav, removeitemfromfav } from '../Redux/Slices/FavresSlice';

const FavresCard = ({ data }) => {

  const [avgrate, setavgrate] = useState("bg-[#ffffff]");
  const [best, setbest] = useState("hidden");


  useEffect(() => {
    setbest("hidden");
    let value = parseFloat(data?.info?.avgRating);

    if (data?.info?.avgRating === NaN || value <= 0) {
      setavgrate("bg-[#78716c]");
    }
    else if (value >= 4.5) {
      console.log(value);
      setavgrate("bg-[#16a32b]");
      setbest("visible");
    }
    else if (value >= 3.5 && value < 4.5) {
      setavgrate("bg-[#81b02a]");
    }
    else if (value >= 2.5 && value < 3.5) {
      setavgrate("bg-[#f97316]");
    }
    else {
      setavgrate("bg-[#e61e1e]");
    }
  }, [data?.info?.avgRating]);

  const [cusine, setcusine] = useState([]);
  useEffect(() => {
    setcusine(data?.info?.cuisines);
  }, [cusine]);
  

  
  

  return (
    <div className='flex flex-col items-end font-Open'>
      <div className='hover:scale-105 ease-in-out duration-200'>
        <div className='max-w-[404px] rounded-2xl relative overflow-hidden hover:before:to-10%  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t  from-black to-40% text-lg group hover:text-white'>
          <div className={`absolute ${best} right-0 -top-1 overflow-hidden text-slate-100 text-[1.18rem] p-0.5 pr-1 z-50 w-auto h-auto rounded-bl-full pl-4 border-emerald-500 border-b-[3px] bg-gradient-to-r from-[#0c870c] via-[#0f9b0f] to-emerald-700 `}>
            <div className="flex flex-row items-center w-auto">
              <p className='pr-0.5'>Top Restaurant</p>
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trending_Up"> <path id="Vector" d="M20.0005 7L14.1543 12.9375C14.0493 13.0441 13.9962 13.0976 13.9492 13.1396C13.1899 13.8193 12.0416 13.8193 11.2822 13.1396C11.2352 13.0976 11.1817 13.0442 11.0767 12.9375C10.9716 12.8308 10.9191 12.7774 10.8721 12.7354C10.1127 12.0557 8.96397 12.0557 8.20461 12.7354C8.15771 12.7773 8.10532 12.8305 8.00078 12.9367L4 17M20.0005 7L20 13M20.0005 7H14" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </div>


          </div>
          <img className='pointer-events-none	' src={CDN_URL + data?.info?.cloudinaryImageId} />
          <div className='w-full absolute bottom-1 left-2 text text-slate-200 z-20 drop-shadow-xl flex justify-between'>
            <p className='text-left capitalize text-white-400 font-bold text-xl'>{data?.info?.aggregatedDiscountInfoV3?.header} {data?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
           
          </div>
        </div>
        <div className='flex flex-row mt-1 group'>
          <div className={`flex flex-row items-center border ${avgrate} border-gray-200  dark:border-gray-800 rounded-lg w-12 mr-2`}>
            <img class="object-cover rounded-t-lg md:rounded-none md:rounded-s-lg w-5 px-1" src={img1}></img>
            <span class="font-normal  text-white ">{data?.info?.avgRating}</span>
          </div>
          <div>
            <p className='text-right capitalize w-full text-zinc-700 font-semibold dark:text-slate-300'>{data?.info?.name}</p>
          </div>
          <div className='w-auto'></div>
        </div>

        <div className='flex no-wrap gap-x-2 overflow-hidden max-w-[400px] text-gray-500 font-light dark:text-white'>
          {
            cusine.slice(0, 3).map((data1) => {
              return <p>{data1}</p>
            })
          }
        </div>
        <p className='text-left capitalize text-slate-500'>{data?.info?.areaName}</p>
      </div>
    </div>
  )
}

export default FavresCard;