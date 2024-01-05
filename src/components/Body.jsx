import React, { useContext } from 'react'
import { MenuContext } from '../ContextAPI/MenuContext';
import Card from './Card';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_URL } from '../constants';
import './style.css'
import img from "../images/circle-right.png";
import Hero from './Hero';
import { useRef } from 'react';

const Body = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const { restaurant_data, restaurant_bannerdata, filterdataonratings, filterAbove3, filterBest, filterAbove2, filterAbove1, filterUnder30,filterVegi } = useContext(MenuContext);
  console.log(restaurant_data);
  function filterdataratings(){
    filterdataonratings();
  }
  function filterAb3() {
    filterAbove3()
  }
  function filterBst() {
    filterBest()
  }
  function filterAb2() {
    filterAbove2()
  }
  function filterAb1() {
    filterAbove1()
  }
  function filter30() {
    filterUnder30()
  }
  function filterVeg() {
    filterVegi()
  }
  return (
    <div className='py-12 dark:bg-[#0d1117]'>
      {
        restaurant_data === null || restaurant_data === undefined ?
          (<p><Shimmer /></p>) :
          (
            <div>
              <div className='text-white'>
                <Hero />
              </div>
              <div>
                {
                  restaurant_bannerdata!==undefined && restaurant_bannerdata.length>0?
                  (
                  <div>
                    <p className='font-bold text-4xl mx-14 px-3 text-slate-700 dark:text-slate-300 font-Open'>Best Offers for You...</p>
                <div className='flex items-center py-10 mb-10 overflow-x-scroll mx-10 flex-shrink-0 scroll-smooth ease-in-out' ref={ref}>
                  <div className='absolute right-5 z-20'>
                    <img src={img} className='w-10 cursor-pointer z-30' onClick={() => scroll(800)} />
                  </div>
                  <div className='absolute left-5 z-20 rotate-180'>
                    <img src={img} className='w-10 cursor-pointer z-30' onClick={() => scroll(-800)} />
                  </div>
                  {
                    restaurant_bannerdata && restaurant_bannerdata.map((data) => {
                      let url = data?.entityId;
                      let collection_id = data?.entityId;
                      if (data?.entityId[0] === 's') {
                        let url1 = new URL(url);
                        const queryString = url1.search;
                        const urlSearchParams = new URLSearchParams(queryString);
                        collection_id = urlSearchParams.get('collection_id');
                      }
                      return <div className='cursor-pointer rounded-2xl hover:scale-105  ease-in-out duration-200 overflow-hidden w-[400px] mx-7 flex-shrink-0'><Link to={`/Restaurant/${collection_id}`}><img src={CDN_URL + data.imageId} /></Link></div>
                    })
                  }
                </div>

                <div className='flex gap-x-4 font-semibold'>
                  <button onClick={() => { filterBst(); }} className='mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 bg-slate-100 text-slate-900 dark:bg-[#24292f] rounded-lg text-xl'>
                    Top Restaurants
                  </button>
                  <button onClick={()=>{filter30();}} className='mb-5 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 bg-slate-100 text-slate-900 dark:bg-[#24292f] rounded-lg text-xl'>
                    Under 30 Min
                  </button>
                  <button onClick={()=>{filterVeg();}} className='mb-5 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 bg-slate-100 text-slate-900 dark:bg-[#24292f] rounded-lg text-xl'>
                    Veg Only
                  </button>
                  <button onClick={()=>{filterdataratings();}} className='mb-5 border py-1 px-2 dark:text-slate-200 bg-slate-100 text-slate-900 dark:border-slate-800 dark:bg-[#24292f] rounded-lg text-xl'>
                    Rating 4.0+
                  </button>
                  <button onClick={()=>{filterAb3();}} className='mb-5 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 bg-slate-100 text-slate-900 dark:bg-[#24292f] rounded-lg text-xl'>
                    Rating 3.0+
                  </button>
                  <button onClick={()=>{filterAb2();}} className='mb-5 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 bg-slate-100 text-slate-900 dark:bg-[#24292f] rounded-lg text-xl'>
                    Rating 2.0+
                  </button>
                  <button onClick={()=>{filterAb1();}} className='mb-5 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 bg-slate-100 text-slate-900 dark:bg-[#24292f] rounded-lg text-xl'>
                    Rating 1.0+
                  </button>
                </div>
                  </div>
                  ):
                  (<p></p>)

                }
              </div>
              <div className='flex flex-wrap justify-evenly items-center gap-y-12 font-Open'>
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
