import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../constants';

const Card = ({data}) => {
    const [cusine,setcusine]=useState([]);
    useEffect(()=>{
      setcusine(data?.info?.cuisines);
    },[cusine]);
  return (
    <div>
      <div className='max-w-[400px] rounded-3xl '>
        <div className='w-full'>
            <img src={CDN_URL+data?.info?.cloudinaryImageId} className='w-full h-full object-cover rounded-3xl'/>
        </div>
        <p className=' text-center capitalize text-lg'>{data?.info?.name}</p>
        <p className=' text-center capitalize text-lg'>{data?.info?.areaName}</p>
          <div className='flex justify-center gap-x-2 overflow-hidden'>
            {
              cusine.map((data1)=>{
                return <p>{data1}</p>
              })
            }
          </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Card;
