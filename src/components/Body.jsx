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
  const { restaurant_data, restaurant_bannerdata } = useContext(MenuContext);
  console.log(restaurant_data);
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
