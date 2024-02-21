import React, { useContext, useEffect, useState } from 'react'
import { redirect, useParams, useSearchParams } from 'react-router-dom';
import { MenuContext } from '../ContextAPI/MenuContext';
import RestaurantMenuOpt from './RestaurantMenuOpt';
import clock from '../images/clock.webp'
import { CDN_URL } from '../constants';

const RestaurantMenu = () => {

    let { id } = useParams();
    const { resid, setresid, fetchdata2, restaurant_menu, restaurant_info, restaurant_info2, vegonly, setvegonly } = useContext(MenuContext);
    const [cusine, setcusine] = useState([]);
    const [data, setdata] = useState(restaurant_info2);
    const item = "burger";
    

    useEffect(() => {
        setvegonly(false);
        setresid(id);
    }, [id]);
    console.log(restaurant_info)
    console.log(restaurant_info2);

    return (
        restaurant_info2 !== null && restaurant_info2 !== undefined ?
            (
                <div className='w-full min-h-screen h-full dark:bg-[#0d1117] py-10 pt-36 dark:text-white font-Open'>
                    <div className='w-[345px] sm:w-[500px] md:w-[650px] lg:w-[800px]  mx-auto flex flex-col'>
                        <p className=' font-semibold text-3xl capitalize w-full text-zinc-700 dark:text-slate-100'>{restaurant_info?.name}</p>
                        <div className="h-[250px] w-full rounded-lg overflow-clip my-5 relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t  from-black to-40% text-lg group text-white">
                            <img className='overflow-hidden w-full absolute -top-3' src={CDN_URL + restaurant_info?.cloudinaryImageId} />
                                <div className="absolute left-4 bottom-4 text-md md:text-xl lg:text-2xl text-slate-100 z-20">{restaurant_info?.areaName}</div>
                            <div className="absolute right-4 bottom-4 text-md md:text-xl lg:text-2xl text-slate-100 z-20"><span className="text-slate-100 text-2xl font-thin flex items-center">
                                <img src={clock} alt="" className='w-[1.5rem] h-[1.5rem] dark:invert mx-2' />
                                <span className='lowercase'>{restaurant_info?.sla?.slaString}</span>
                            </span></div>
                        </div>
                        <p className='flex flex-row gap-x-2'>{
                            cusine.map((cusin) => {
                                return <p>{cusin}</p>
                            })
                        }</p>
                        <div className="flex justify-between">
                            <div className='flex flex-row items-center'>
                                <p className='pr-5 dark:text-slate-100 text-slate-800 text-2xl font-thin'>Veg Only</p>
                                    {vegonly ?
                                        (
                                            <button onClick={() => { setvegonly(prev => !prev) }} className="h-[25px] dark:bg-neutral-100 bg-neutral-300 rounded-full w-[50px] flex flex-row">
                                                <div className='rounded-full dark:bg-neutral-100 min-h-full min-w-[50%]'></div>
                                                <div className='rounded-full min-w-[50%] min-h-full bg-green-500'></div>
                                            </button>
                                        ) :
                                        (
                                            <button onClick={() => { setvegonly(prev => !prev) }} className="h-[25px] dark:bg-neutral-100 bg-neutral-300 rounded-full w-[50px] flex flex-row">
                                                <div className='rounded-full min-w-[50%] min-h-full bg-red-600'></div>
                                            </button>
                                        )

                                    }
                            </div>
                        </div>

                        {
                            restaurant_info2?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((rest) => {
                                return <RestaurantMenuOpt key={id} rest={rest} />
                            })
                            
                        }
                        {
                            restaurant_info2?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((rest) => {
                                return <RestaurantMenuOpt key={id} rest={rest} />
                            })
                            
                        }
                        {
                            restaurant_info2?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((rest) => {
                                return <RestaurantMenuOpt key={id} rest={rest} />
                            })
                            
                        }
                         {
                            restaurant_info2?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((rest) => {
                                return <RestaurantMenuOpt key={id} rest={rest} />
                            })
                            
                        }
                    </div>
                </div>
            ) :
            <p>false</p>
    )
}

export default RestaurantMenu;
