import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { additemtofav } from "../Redux/Slices/FavresSlice";
import { useContext, useEffect } from "react";
import FavresCard from "./FavresCard";
import { MenuContext } from "../ContextAPI/MenuContext";
import imgnormal from "../images/notfound.webp"



const Favres = () => {


    var favres = useSelector(store => store.favres.items);


    useEffect(() => {
        if (favres && favres!==undefined && favres.length === 0 && localStorage.getItem("fav-items")) {
            favres = JSON.parse(localStorage.getItem('fav-items'));
        }
        localStorage.setItem('isCartEmptied', 'false');
    }, [])


    if(!favres){
        return <div className='py-20 flex flex-wrap justify-evenly items-center gap-y-12 font-Open dark:bg-[#0d1117]'>
            <img src={imgnormal} className="dark:invert"/>
        </div>
    }

    return (
        <div className='py-20 pt-36 flex flex-wrap justify-evenly items-center gap-y-12 font-Open dark:bg-[#0d1117]'>
           
            {
                favres && favres.length===0?
                (<div className='py-20 flex flex-wrap justify-evenly items-center gap-y-12 font-Open dark:bg-[#0d1117] animate-pulse'>
                        <img src={imgnormal} alt="" className="dark:invert"/>
            </div>):(
                favres.map((data) => {
                    return <FavresCard data={data} />
                })
            )
            }
        </div>
    )
}

export default Favres;