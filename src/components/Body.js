import React, { useContext } from 'react'
import { MenuContext } from '../ContextAPI/MenuContext';
import Card from './Card';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
const Body = () => {
  const {restaurant_data}=useContext(MenuContext);
  return (
    <div className='py-12 dark:bg-[#0d1117]'>
      {
        restaurant_data===null || restaurant_data===undefined?
        (<p><Shimmer/></p>):
        (
            <div className='flex flex-wrap justify-evenly items-center gap-y-12'>
          {
            restaurant_data.map((data)=>{
                return <Link to={`/Restaurant/${data?.info?.id}`}>
                  <Card data={data}/>
                </Link>
            })
          }
          </div>
        )
      }
    </div>
  )
}

export default Body
