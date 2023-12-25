import { useContext, useEffect, useState } from "react";
import best from "../images/hero.png"
import { LocationContext } from "../ContextAPI/LocationContext";
import { MenuContext } from "../ContextAPI/MenuContext";
import './hero.css'

const Hero = () => {
    const [locationdata,setlocationdata]=useState("Ludhiana");
    const {latitude,longitude,getlatlong}=useContext(LocationContext);
    const {fetchdata}=useContext(MenuContext);
    console.log(latitude);
    console.log(longitude);
    useEffect(()=>{
        if(latitude!==null && longitude!==null){
            fetchdata(latitude,longitude);
        }
    },[latitude]);

    const {userName}=useContext(MenuContext);
    
    return (<div className="text-white bg-neutral-700 p-10 font-Open h-[500px] mb-10 bg-hero overflow-hidden text-3xl">
        <div className="flex items-stretch justify-between">
            <div className="flex flex-col">
                <h2 className="my-2">Welcome {userName}!!</h2>
                <h2 className="my-2">Enter Location 🗺</h2>
                <input type="text" className="rounded-md text-black outline-none px-2 py-1 text-lg" onChange={(e)=>{setlocationdata(e.target.value)}} onKeyDown={(e)=>{if(e.key==="Enter"){getlatlong(locationdata)}}} />
            </div>
            <div className="relative w-[400px]">
                <img src={best} alt="" className="absolute w-[150%] -top-52 -right-60 spinner"/>
            </div>
        </div>
    </div>)
}

export default Hero;

/*
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
.animate-spin {
    animation: spin 1s linear infinite;
}
 */