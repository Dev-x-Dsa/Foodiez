import { useContext, useEffect, useState } from "react";
import best from "../images/hero.png"
import { LocationContext } from "../ContextAPI/LocationContext";
import { MenuContext } from "../ContextAPI/MenuContext";
import './hero.css'
import img from "../images/ramen.png";
import img1 from "../images/pizza.jpg"
import img2 from "../images/salad.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    
    return (
    <div className="relative pb-10 overflow-y-hidden">
        <Carousel showArrows={true} autoPlay showStatus={false} infiniteLoop showThumbs={false}>
            <img src={img} className="max-h-[750px]"/>
            <img src={img1} className="max-h-[750px]"/> 
            <img src={img2} className="max-h-[750px]"/>
        </Carousel>

        <div className="absolute top-10 left-10">
            <div className="flex items-stretch justify-between">
                <div className="flex flex-col">
                    <h2 className="my-2 text-black text-2xl font-bold">Welcome {userName}!!</h2>
                    <h2 className="my-2 text-black text-2xl font-bold">Enter Location 🗺</h2>
                    <input type="text" className="rounded-md text-black outline-none px-2 py-1 text-lg" onChange={(e)=>{setlocationdata(e.target.value)}} onKeyDown={(e)=>{if(e.key==="Enter"){getlatlong(locationdata)}}} />
                </div>
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