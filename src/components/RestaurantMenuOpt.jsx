import React, { useContext, useEffect, useState } from 'react'
import ItemCard from './ItemCard';
import img from "../images/down-arrow.webp"
import img2 from "../images/uparrow.webp"


const RestaurantMenuOpt = ({ rest }) => {

  const [itemcard, setitemcard] = useState([]);
  const [arrow, setarrow] = useState(false);
  console.log(rest);
  useEffect(() => {
    setitemcard(rest?.card?.card?.itemCards || rest?.card?.card?.carousel || rest?.card?.card?.categories?.[0]?.itemCards);
  }, [rest]);
  const [visible, setvisible] = useState(true);

  function visiblehandler() {
    setvisible(prev => !prev);
    setarrow(prev => !prev)
  }


  return (
    <div>
      <div className='cursor-pointer font-Open text-zinc-700 font-medium dark:text-zinc-200'>
        {
          rest?.card?.card?.title ?
            (<div onClick={() => visiblehandler()} className=' text-xl md:text-2xl flex flex-row justify-between border-t-4 border-b-4 border-[#a8bbbf] dark:border-[#798283] py-2 mt-5'>
              <div>{rest?.card?.card?.title}</div>
              <div className={`${arrow ? 'hidden' : 'block'}`}><img src={img2} className='w-5 h-5 dark:invert' /></div>
              <div className={`${arrow ? 'block' : 'hidden'}`}><img src={img} className='w-5 h-5 dark:invert' /></div>
            </div>) :
            (<p></p>)
        }
      </div>
      {itemcard !== undefined ?
        (
          <div>
            {
              itemcard.map((data) => {
                return <ItemCard data={data} visible={visible} />
              })
            }
          </div>
        ) :
        <p></p>}
    </div>
  )
}

export default RestaurantMenuOpt
