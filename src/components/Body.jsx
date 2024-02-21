import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../ContextAPI/MenuContext';
import Card from './Card';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_URL } from '../constants';
import './style.css'
import img from "../images/circle-right.webp";
import Hero from './Hero';
import { useRef } from 'react';

const Body = () => {
  const ref = useRef(null);

  const [b1,setb1]=useState(false);
  const [b2,setb2]=useState(false);
  const [b3,setb3]=useState(false);
  const [b4,setb4]=useState(false);
  const [b5,setb5]=useState(false);
  const [b6,setb6]=useState(false);
  const [b7,setb7]=useState(false);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const {onsidebarclick,restaurant_data,filterunderVegi, restaurant_bannerdata, filterdataonratings, filterAbove3, filterBest, filterAbove2, filterAbove1, filterUnder30,filterVegi,filterBestunder,filterBestVegi,filterAll,filterBestundervegi} = useContext(MenuContext);

  function filterdataratings(){
    filterdataonratings();
  }
  function filterAb3() {
    filterAbove3()
  }
  function filterBst() {
    if(b1){
        if(b2 && b3){
          filterBestundervegi();
        }
        else if(b2){
          filterBestunder();
        }
        else if(b3){
          filterBestVegi();
        }
        else{
          filterBest();
        }
    }
    else{
      if(b2 && b2){
        filterunderVegi();
      }
      else if(b3){
        filterVegi();
      }
      else if(b2){
        filterUnder30();
      }
      else{
        filterAll();
      }
    }
  }
  function filterAb2() {
    filterAbove2()
  }
  function filterAb1() {
    filterAbove1()
  }
  function filter30() {
    if(b2){
      if(b1 && b3){
        filterBestundervegi();
      }
      else if(b1){
        filterBestunder();
      }
      else if(b3){
        filterunderVegi();
      }
      else{
        filterUnder30()
      }
  }
  else{
    if(b1 && b3){
      filterBestVegi();
    }
    else if(b1){
      filterBest();
    }
    else if(b3){
      filterVegi();
    }
    else{
      filterAll();
    }
  }
  }
  function filterVeg() {
    if(b3){
      if(b1 && b2){
        filterBestundervegi();
      }
      else if(b1){
        filterBestVegi();
      }
      else if(b2){
        filterunderVegi();
      }
      else{
        filterVegi()
      }
  }
  else{
    if(b1 && b2){
      filterBestunder();
    }
    else if(b1){
      filterBest();
    }
    else if(b2){
      filterUnder30();
    }
    else{
      filterAll();
    }
  }
}



  useEffect(() => {
      filterBst();
  }, [b1]);

  useEffect(() => {
    filter30();
}, [b2]);

  useEffect(() => {
    filterVeg();
}, [b3]);



  return (
    <div className={`dark:bg-[#0c111d] ${onsidebarclick?("blur-sm brightness-50"):("blur-none")}`}>
      {
        restaurant_data === null || restaurant_data === undefined ?
          (<p><Shimmer /></p>) :
          (
            <div className='overflow-x-hidden'>
              <div className='text-white mt-20 mb-10'>
                <Hero />
              </div>
              <div>
                {
                  restaurant_bannerdata!==undefined && restaurant_bannerdata.length>0?
                  (
                  <div>
                    <p className='font-bold text-2xl md:text-3xl lg:text-4xl mx-14 px-1 md:px-3 text-slate-700 dark:text-slate-300 font-Open pt-10'>Best Offers for You...</p>
                <div className='flex items-center py-10 mb-10 overflow-x-scroll mx-10 flex-shrink-0 scroll-smooth ease-in-out' ref={ref}>
                  <div className='absolute right-5 z-20'>
                    <img src={img} className='w-10 cursor-pointer z-30' onClick={() => scroll(800)} />
                  </div>
                  <div className='absolute left-5 z-20 rotate-180'>
                    <img src={img} className='w-10 cursor-pointer z-30' onClick={() => scroll(-800)} />
                  </div>
                  {
                    restaurant_bannerdata.map((data) => {
                      let url = data?.entityId;
                      let collection_id = data?.entityId;
                      if (data?.entityId[0] === 's') {
                        let url1 = new URL(url);
                        const queryString = url1.search;
                        const urlSearchParams = new URLSearchParams(queryString);
                        collection_id = urlSearchParams.get('collection_id');
                      }
                      return <div className='cursor-pointer rounded-2xl hover:scale-105  ease-in-out duration-200 overflow-hidden w-[250px] md:w-[300px] lg:w-[400px] mx-7 flex-shrink-0'><Link to={`/Restaurant/${collection_id}`}><img src={CDN_URL + data.imageId} /></Link></div>
                    })
                  }
                </div>

                <div className='flex gap-x-2 lg:gap-x-4 font-semibold ml-3 md:ml-5 lg:ml-7 overflow-x-scroll px-2'>
                  <button onClick={() => {setb1(!b1); }} className={`mb-5 ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b1?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b1?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xs md:text-sm lg:text-xl`}>
                    Top Restaurants
                  </button>
                  <button onClick={() => {setb2(!b2); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800  ${b2?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b2?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Under 30 Min
                  </button>
                  <button onClick={() => {setb3(!b3); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800  ${b3?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b3?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xs md:text-sm lg:text-xl`}>
                    Veg Only
                  </button>
                  <button onClick={() => {setb4(!b4); filterdataonratings(); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800  ${b4?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b4?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xs md:text-sm lg:text-xl`}>
                    Rating 4.0+
                  </button>
                  <button disabled={b4} onClick={() => {setb5(!b5); filterAb3(); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b4?("dark:bg-neutral-500 text-slate-400"):(b5?"bg-green-600 text-neutral-100":"bg-slate-100")}  text-slate-900  ${b4?("dark:bg-neutral-500 text-slate-400"):(b5?"dark:bg-green-600":"dark:bg-[#24292f]")}   rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Rating 3.0+
                  </button>
                  <button disabled={b4 || b5} onClick={() => { setb6(!b6); filterAb2(); }} className={`mb-5 ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b4 || b5?("dark:bg-neutral-500 text-slate-400"):(b6?"bg-green-600 text-neutral-100":"bg-slate-100")} text-slate-900 ${(b4 || b5)?("dark:bg-neutral-500 text-slate-400"):(b6?"dark:bg-green-600":"dark:bg-[#24292f]")} rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Rating 2.0+
                  </button>
                  <button disabled={b4 || b5 || b6} onClick={() => {setb7(!b7); filterAb1(); }} className={`mb-5 ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b4 || b5 || b6?("dark:bg-neutral-500 text-slate-400"):(b7?"bg-green-600 text-neutral-100":"bg-slate-100")}  text-slate-900 ${b4  || b5 || b6?("dark:bg-neutral-500 text-slate-400"):(b7?"dark:bg-green-600":"dark:bg-[#24292f]")} rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Rating 1.0+
                  </button>
                </div>
              </div>
                  ):
                  (
                    <div className='flex gap-x-2 lg:gap-x-4 font-semibold ml-3 md:ml-5 lg:ml-7 overflow-x-scroll px-2'>
                  <button onClick={() => {setb1(!b1); }} className={`mb-5 ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b1?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b1?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xs md:text-sm lg:text-xl`}>
                    Top Restaurants
                  </button>
                  <button onClick={() => {setb2(!b2); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800  ${b2?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b2?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Under 30 Min
                  </button>
                  <button onClick={() => {setb3(!b3); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800  ${b3?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b3?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xs md:text-sm lg:text-xl`}>
                    Veg Only
                  </button>
                  <button onClick={() => {setb4(!b4); filterdataonratings(); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800  ${b4?"bg-green-600 text-neutral-100":"bg-slate-100"}  text-slate-900 ${b4?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xs md:text-sm lg:text-xl`}>
                    Rating 4.0+
                  </button>
                  <button disabled={b4} onClick={() => {setb5(!b5); filterAb3(); }} className={`mb-5  ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b4?("dark:bg-neutral-500 text-slate-400"):(b5?"bg-green-600 text-neutral-100":"bg-slate-100")}  text-slate-900  ${b4?("dark:bg-neutral-500 text-slate-400"):(b5?"dark:bg-green-600":"dark:bg-[#24292f]")}   rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Rating 3.0+
                  </button>
                  <button disabled={b4 || b5} onClick={() => { setb6(!b6); filterAb2(); }} className={`mb-5 ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b4 || b5?("dark:bg-neutral-500 text-slate-400"):(b6?"bg-green-600 text-neutral-100":"bg-slate-100")} text-slate-900 ${(b4 || b5)?("dark:bg-neutral-500 text-slate-400"):(b6?"dark:bg-green-600":"dark:bg-[#24292f]")} rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Rating 2.0+
                  </button>
                  <button disabled={b4 || b5 || b6} onClick={() => {setb7(!b7); filterAb1(); }} className={`mb-5 ml-1 md:ml-2 lg:ml-4 border py-1 px-1 lg:px-2 dark:text-slate-200 dark:border-slate-800 ${b4 || b5 || b6?("dark:bg-neutral-500 text-slate-400"):(b7?"bg-green-600 text-neutral-100":"bg-slate-100")}  text-slate-900 ${b4  || b5 || b6?("dark:bg-neutral-500 text-slate-400"):(b7?"dark:bg-green-600":"dark:bg-[#24292f]")} rounded-lg  text-xs md:text-sm lg:text-xl`}>
                    Rating 1.0+
                  </button>
                </div>
                  )

                }
              </div>
              <div className='flex flex-wrap justify-evenly items-center gap-y-12 font-Open py-10'>
                {
                  restaurant_data.map((data) => {
                    return <Link to={`/Restaurant/${data?.info?.id}`}>
                      <Card data={data} />
                    </Link>
                  })
                }
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Body
