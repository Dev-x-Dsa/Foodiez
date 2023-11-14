import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';

const Card = ({ data }) => {
  const [cusine, setcusine] = useState([]);
  useEffect(() => {
    setcusine(data?.info?.cuisines);
  }, [cusine]);
  return (
    <div>
      <div className='max-w-[404px] rounded-2xl relative overflow-hidden hover:scale-105 duration-200 hover:before:hidden  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t  from-black to-50% before:z-10 text-lg hover:text-white'>
        <img src={CDN_URL + data?.info?.cloudinaryImageId} className='w-full h-full hover:scale-105 ease-in-out duration-500' />
        <div className='w-full absolute bottom-2 right-2 text text-slate-100 z-20'>
          <p className='text-right capitalize'>{data?.info?.name}</p>
          <p className='text-right capitalize text-slate-400'>{data?.info?.areaName}</p>
        </div>
        <div className='absolute bottom-[-2px] left-[-1px] bg-green-500 z-20 rounded-md p-1 overflow-y-visible'>
          ₹999.00
        </div>
        {/* <div className='flex justify-center gap-x-2 overflow-hidden'>
            {
              cusine.map((data1)=>{
                return <p>{data1}</p>
              })
            }
          </div> */}
      </div>
    </div>
  )
}

export default Card;