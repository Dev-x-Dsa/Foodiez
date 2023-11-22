import React, { useContext, useEffect, useState } from 'react'
import { redirect, useParams, useSearchParams } from 'react-router-dom';
import { MenuContext } from '../ContextAPI/MenuContext';
import RestaurantMenuOpt from './RestaurantMenuOpt';

const RestaurantMenu = () => {
    let {id}=useParams();
    const {resid,setresid,fetchdata2,restaurant_menu,restaurant_info,restaurant_info2}=useContext(MenuContext);
    const [cusine,setcusine]=useState([]);

    useEffect(()=>{
        setresid(id);
    },[id]);

    return (
       restaurant_info2!==null && restaurant_info2!==undefined?
       (
        <div className='w-full h-full dark:bg-black pt-32 dark:text-white'>
            <div className='w-[800px] mx-auto'>
           <p className=' font-semibold text-xl'>{restaurant_info?.name}</p>
           <p className='flex flex-row gap-x-2'>{
            cusine.map((cusin)=>{
                return <p>{cusin}</p>
            })
           }</p>
           <p className>{restaurant_info?.areaName}</p>
           {
                restaurant_info2?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((rest)=>{
                    return <RestaurantMenuOpt key={id} rest={rest}/>
                })
            }
            </div>
        </div>
       ):
       <p>false</p>
  )
}

export default RestaurantMenu;
