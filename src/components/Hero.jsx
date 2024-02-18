import { useContext, useEffect, useState } from "react";
import best from "../images/hero.webp"
import { LocationContext } from "../ContextAPI/LocationContext";
import { MenuContext } from "../ContextAPI/MenuContext";
import './hero.css'
import img from "../images/ramen.webp";
import img1 from "../images/pizza.webp"
import img2 from "../images/salad.webp";
import img3 from "../images/fpin.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
    const [locationdata,setlocationdata]=useState("Ludhiana");
    const {latitude,longitude,getlatlong}=useContext(LocationContext);
    const {fetchdata}=useContext(MenuContext);
    useEffect(()=>{
        if(latitude!==null && longitude!==null){
            fetchdata(latitude,longitude);
        }
    },[latitude]);

    const {userName}=useContext(MenuContext);
    
    return (
        <div className="relative pb-10 overflow-y-hidden max-h-[575px] hover:before:to-10%  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-br  from-[#333333] to-40% text-lg group mt-10">
            <Carousel showArrows={true} autoPlay showStatus={false} infiniteLoop showThumbs={false} interval={3950}>
                <img src={img} className="min-h-[400px] max-h-[575px] object-cover"/>
                <img src={img1} className="min-h-[400px] max-h-[575px] object-cover"/> 
                <img src={img2} className="min-h-[400px] max-h-[575px] object-cover"/>
            </Carousel>

        <div className="absolute top-0 left-0 w-full overflow-hidden">
                <div className="flex items-stretch justify-between w-full overflow-hidden">
                    <div className="flex z-20 w-full justify-between overflow-hidden relative">
                        <div className="flex flex-col pl-3 md:pl-5 lg:pl-10 pt-10">
                            <h2 className="my-2 text-slate-200 text-md xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Welcome {userName}!!</h2>
                            <div className="my-2 text-slate-200 text-md sm:text-xl md:text-2xl font-bold flex"><div>Enter your delivery Location</div> <img src={img3} alt="" className="h-8" /></div>
                            <div className="h-3"></div>
                            <input type="text" className="rounded-lg text-slate-800 outline-none px-2 py-1 text-md md:text-lg w-[16rem] md:w-[20rem] lg:w-[28rem]" onChange={(e)=>{setlocationdata(e.target.value)}} onKeyDown={(e)=>{if(e.key==="Enter"){getlatlong(locationdata)}}} />
                        </div>
                        <img src={best} alt="" className="absolute w-[16rem] md:w-[20rem] lg:w-[25rem] top-[-7.5rem] md:top-[-9rem] lg:top-[-11rem] -right-[8rem] md:-right-[10rem] lg:-right-[12rem] spinner pt-5" />
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