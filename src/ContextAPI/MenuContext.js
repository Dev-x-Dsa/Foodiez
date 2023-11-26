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
    const [temprestaurant_data,setemprestaurant_data]=useState(null);
    
    
    async function fetchdata(latitude,longitude){
        setlati(latitude);
        setlongi(longitude);
        let restaurant_listurl=`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;
        const output=await fetch(restaurant_listurl);
        const data=await output.json();
        
        const restaurant_info=data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setrestaurant_data(restaurant_info);
        setemprestaurant_data(restaurant_info);
        
    }
    
    async function fetchdata2(){
        let restaurant_menuurl=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lati}&lng=${longi}&restaurantId=${resid}&submitAction=ENTER`;
        const output=await fetch(restaurant_menuurl);
        const data2=await output.json();
        setrestaurant_info(data2?.data?.cards[0]?.card?.card?.info);
        setrestaurant_info2(data2);
    }

    function filterdata(search1){
       const search=search1.toString().toLowerCase().split(' ').join('');
       const filterdata1=temprestaurant_data.filter((data)=>{
        return data?.info?.name?.toString().toLowerCase().split(' ').join('').includes(search);
       })
       if(filterdata1!==undefined && filterdata1!==null)
            setrestaurant_data(filterdata1);
    }

    function allrestaurants(){
        setrestaurant_data(temprestaurant_data);
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
        setrestaurant_info2,
        filterdata,
        allrestaurants
    };

    return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}