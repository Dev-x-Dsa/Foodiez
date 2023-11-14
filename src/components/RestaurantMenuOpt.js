import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';

const RestaurantMenuOpt = ({rest,}) => {

    const [itemcard,setitemcard]=useState([]);

    useEffect(()=>{
        setitemcard(rest?.card?.card?.itemCards);
    },[rest]);

    

  return (
    <div>
      <div className='text-2xl flex flex-col justify-center items-center mt-5'>
        {rest?.card?.card?.title}
      </div>
      {itemcard!==undefined?
      (
        <div>
            {
                itemcard.map((data)=>{
                    return <ItemCard data={data}/>
                })
            }
        </div>
      ):
      <p></p>}
    </div>
  )
}

export default RestaurantMenuOpt
