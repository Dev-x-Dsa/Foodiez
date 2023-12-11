import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';
import img1 from "../images/star.png"



const Card = ({ data }) => {

  const [avgrate, setavgrate] = useState("bg-[#ffffff]");

  useEffect(() => {
    let value = parseFloat(data?.info?.avgRating);
    if (data?.info?.avgRating === NaN || value <= 0) {
      setavgrate("bg-[#78716c]");
    }
    else if (value >= 4.5) {
      setavgrate("bg-[#16a32b]");
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
  }, []);


  const [cusine, setcusine] = useState([]);
  useEffect(() => {
    setcusine(data?.info?.cuisines);
  }, [cusine]);
  return (
    <div className='flex flex-col items-end font-Open'>
      <div className='hover:scale-105 ease-in-out duration-200'>
        <div className='max-w-[404px] rounded-2xl relative overflow-hidden hover:before:to-10%  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t  from-black to-40% text-lg group hover:text-white'>
          <img src={CDN_URL + data?.info?.cloudinaryImageId} />
          <div className='w-full absolute bottom-1 left-2 text text-slate-200 z-20 drop-shadow-xl'>
            <p className='text-left capitalize text-white-400 font-bold text-xl'>{data?.info?.aggregatedDiscountInfoV3?.header} {data?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
          </div>
        </div>
        <div className='flex flex-row mt-1'>
          <div className={`flex flex-row items-center border ${avgrate} border-gray-200  dark:border-gray-800 rounded-lg w-12 mr-2`}>
            <img class="object-cover rounded-t-lg md:rounded-none md:rounded-s-lg w-5 px-1" src={img1}></img>
            <div class="flex flex-col justify-between">
              <span class="font-normal  text-white ">{data?.info?.avgRating}</span>
            </div>
          </div>
          <div>
            <p className='text-right capitalize w-full text-zinc-700 font-semibold dark:text-slate-300'>{data?.info?.name}</p>
          </div>
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

export default Card;