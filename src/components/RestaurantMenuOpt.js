import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';

const RestaurantMenuOpt = ({rest}) => {

    const [itemcard,setitemcard]=useState([]);

    useEffect(()=>{
        setitemcard(rest?.card?.card?.itemCards);
    },[rest]);
    const [visible,setvisible]=useState(true);
    function visiblehandler(){
      setvisible(prev=>!prev);
    }
    

  return (
    <div>
      <div>
      {
        rest?.card?.card?.title?
        (<div onClick={()=>visiblehandler()} className='text-2xl flex flex-row justify-between border-t-4 border-b-4 py-2 mt-5'>
        <div>{rest?.card?.card?.title}</div>
        <div>^</div>
      </div>):
        (<p></p>)
      }
      </div>
      {itemcard!==undefined?
      (
        <div>
            {
                itemcard.map((data)=>{
                    return <ItemCard data={data} visible={visible}/>
                })
            }
        </div>
      ):
      <p></p>}
    </div>
  )
}

export default RestaurantMenuOpt
