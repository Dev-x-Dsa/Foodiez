import React, { useContext } from 'react'
import { MenuContext } from '../ContextAPI/MenuContext';
import Card from './Card';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_URL } from '../constants';
const Body = () => {
  const {restaurant_data,restaurant_bannerdata}=useContext(MenuContext);
  return (
    <div className='py-12 dark:bg-[#0d1117]'>
      {
        restaurant_data===null || restaurant_data===undefined?
        (<p><Shimmer/></p>):
        (
          <div>
          <div>
            <p className='capitalize'>Best offers for You</p>
            <div className='flex flex-row justify-center items-center space-x-10 w-9/12 mx-auto'>
              {
                restaurant_bannerdata.map((data)=>{
                  return <div ><img src={CDN_URL+data.imageId}/></div>
                })
              }
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly items-center gap-y-12'>
            {
              restaurant_data.map((data)=>{
                  return <Link to={`/Restaurant/${data?.info?.id}`}>
                    <Card data={data}/>
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
