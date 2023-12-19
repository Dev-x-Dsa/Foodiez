import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { additemtofav } from "../Redux/Slices/FavresSlice";
import { useEffect } from "react";
import FavresCard from "./FavresCard";

const Favres = () => {

    const dispatch = useDispatch();
    var favres = useSelector(store => store.favres.items);
    useEffect(() => {
        if (favres.length === 0 && localStorage.getItem("fav-items")) {
            favres = JSON.parse(localStorage.getItem('fav-items'));

            favres.map((item) => {
                dispatch(additemtofav(item));
            })
        }
        localStorage.setItem('isCartEmptied', 'false');
    }, [])

    return (
        <div className=' py-20 flex flex-wrap justify-evenly items-center gap-y-12 font-Open dark:bg-[#0d1117]'>
            {
                favres &&
                favres.map((data) => {
                    return <FavresCard data={data} />
                })
            }
        </div>
    )
}

export default Favres;