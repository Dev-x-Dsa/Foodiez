import { useContext, useEffect, useState } from "react";
import plate from "../images/plate.png"
import { LocationContext } from "../ContextAPI/LocationContext";
import { MenuContext } from "../ContextAPI/MenuContext";

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
    
    return (<div className="text-white bg-neutral-700 p-10 font-Open h-[500px] mb-10 bg-hero overflow-hidden text-3xl">
        <div className="flex items-stretch justify-between">
            <div className="flex flex-col">
                <h2 className="my-2">Enter Location 🗺</h2>
                <input type="text" className="rounded-md text-black outline-none px-2 py-1 text-lg" onChange={(e)=>{setlocationdata(e.target.value)}} onKeyDown={(e)=>{if(e.key==="Enter"){getlatlong(locationdata)}}} />
            </div>
            <div className="relative w-[400px]">
                <img src={plate} alt="" className="absolute -top-32 -right-32 w-full" />
            </div>
        </div>
    </div>)
}

export default Hero;