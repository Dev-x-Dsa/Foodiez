import React, { useContext, useState } from 'react'
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
    <div className='dark:bg-[#0c111d]'>
      {
        restaurant_data === null || restaurant_data === undefined ?
          (<p><Shimmer /></p>) :
          (
            <div>
              <div className='text-white mt-20'>
                <Hero />
              </div>
              <div>
                {
                  restaurant_bannerdata!==undefined && restaurant_bannerdata.length>0?
                  (
                  <div>
                    <p className='font-bold text-4xl mx-14 px-3 text-slate-700 dark:text-slate-300 font-Open pt-10'>Best Offers for You...</p>
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
                  <button onClick={() => {setb1(!b1); filterBst(); }} className={`mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 ${b1?"bg-green-600":"bg-slate-100"}  text-slate-900 ${b1?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xl`}>
                    Top Restaurants
                  </button>
                  <button onClick={() => {setb2(!b2); filter30(); }} className={`mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800  ${b2?"bg-green-600":"bg-slate-100"}  text-slate-900 ${b2?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xl`}>
                    Under 30 Min
                  </button>
                  <button onClick={() => {setb3(!b3); filterVeg(); }} className={`mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800  ${b3?"bg-green-600":"bg-slate-100"}  text-slate-900 ${b3?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xl`}>
                    Veg Only
                  </button>
                  <button onClick={() => {setb4(!b4); filterdataonratings(); }} className={`mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800  ${b4?"bg-green-600":"bg-slate-100"}  text-slate-900 ${b4?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xl`}>
                    Rating 4.0+
                  </button>
                  <button disabled={b4} onClick={() => {setb5(!b5); filterAb3(); }} className={`mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800  ${b5?"bg-green-600":"bg-slate-100"}  text-slate-900 ${b5?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xl`}>
                    Rating 3.0+
                  </button>
                  <button disabled={b4 || b5} onClick={() => { setb6(!b6); filterAb2(); }} className={`mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 ${b6?"bg-green-600":"bg-slate-100"}  text-slate-900 ${b6?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xl`}>
                    Rating 2.0+
                  </button>
                  <button disabled={b4 || b5 || b6} onClick={() => {setb7(!b7); filterAb1(); }} className={`mb-5  ml-4 border py-1 px-2 dark:text-slate-200 dark:border-slate-800 ${b7?"bg-green-600":"bg-slate-100"}  text-slate-900 ${b7?"dark:bg-green-600":"dark:bg-[#24292f]"} rounded-lg text-xl`}>
                    Rating 1.0+
                  </button>
                </div>
                  </div>
                  ):
                  (<p></p>)

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
