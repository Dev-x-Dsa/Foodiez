import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";


export const MenuContext=createContext();

export default function MenuContextProvider({children}){
    const [restaurant_data,setrestaurant_data]=useState(null);
    const [resid,setresid]=useState(null);
    const [restaurant_menu,setrestaurant_menu]=useState(null);
    const [restaurant_info,setrestaurant_info]=useState(null);
    const [restaurant_info2,setrestaurant_info2]=useState(null);
    const [lati,setlati]=useState(null);
    const [longi,setlongi]=useState(null);
    
    
    async function fetchdata(latitude,longitude){
        setlati(latitude);
        setlongi(longitude);
        let restaurant_listurl=`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;
        const output=await fetch(restaurant_listurl);
        const data=await output.json();
        
        const restaurant_info=data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setrestaurant_data(restaurant_info);
        
    }
    
    async function fetchdata2(){
        let restaurant_menuurl=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lati}&lng=${longi}&restaurantId=${resid}&submitAction=ENTER`;
        const output=await fetch(restaurant_menuurl);
        const data2=await output.json();
        setrestaurant_info(data2?.data?.cards[0]?.card?.card?.info);
        setrestaurant_info2(data2);
    }

    useEffect(()=>{
            fetchdata2();
    },[resid]);


    const values={
        restaurant_data,
        setrestaurant_data,
        fetchdata,
        resid,
        setresid,
        fetchdata2,
        restaurant_menu,
        setrestaurant_menu,
        restaurant_info,
        setrestaurant_info,
        restaurant_info2,
        setrestaurant_info2
    };

    return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}