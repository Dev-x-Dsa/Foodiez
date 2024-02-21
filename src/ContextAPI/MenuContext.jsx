import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { additemtofav } from "../Redux/Slices/FavresSlice";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import Card from "../components/Card";


export const MenuContext = createContext();

export default function MenuContextProvider({ children }) {
    const [restaurant_data, setrestaurant_data] = useState(null);
    const [resid, setresid] = useState(null);
    const [restaurant_menu, setrestaurant_menu] = useState(null);
    const [restaurant_info, setrestaurant_info] = useState(null);
    const [restaurant_info2, setrestaurant_info2] = useState(null);
    const [lati, setlati] = useState(null);
    const [longi, setlongi] = useState(null);
    const [temprestaurant_data, setemprestaurant_data] = useState(null);
    const [restaurant_bannerdata, setrestaurant_bannerdata] = useState(null);
    var cartitems = useSelector((store) => store.cart.items);
    var freq = useSelector((store) => store.cart.itemQuantities);
    const [userName, setuserName] = useState("");
    const [filterapplied,setfilterapplied]=useState(false);
    const [vegonly,setvegonly]=useState(false);
    const [onsidebarclick,setonsidebarclick]=useState(false);    

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setuserName(user.displayName);
            }
            else {
                setuserName("");
            }

        })
    }, [userName]);


    async function fetchdata(latitude, longitude) {
        setlati(latitude);
        setlongi(longitude);
        let restaurant_listurl = `https://corsproxy.org/?${encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`)}`;
        const output = await fetch(restaurant_listurl);
        const data = await output.json();
        let restaurant_info=[];
        let cards_length = data?.data?.cards?.length || 0;

        for (let i = 0; i < cards_length; ++i) {
            if (data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle) {
                if (data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    restaurant_info = restaurant_info.concat(
                        data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    );
                }
            }
        }
        
        let restaurant_bannerinfo = [];

        for (let i = 0; i <= cards_length; ++i) {
            if (data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.info) {
                restaurant_bannerinfo = restaurant_bannerinfo.concat(
                    data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.info
                );
            }
        }

        setrestaurant_bannerdata(restaurant_bannerinfo);
        setrestaurant_data(restaurant_info);
        setemprestaurant_data(restaurant_info);
    }

    async function fetchdata2() {
        <div className='flex flex-wrap justify-evenly items-center gap-y-12 font-Open'>
            {
                restaurant_data && restaurant_data.map((data) => {
                    return <Link to={`/Restaurant/${data?.info?.id}`}>
                        <Card data={data} />
                    </Link>
                })
            }
        </div>
        let restaurant_menuurl = `https://corsproxy.org/?${encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lati}&lng=${longi}&restaurantId=${resid}&submitAction=ENTER`)}`;
        const output = await fetch(restaurant_menuurl);
        const data2 = await output.json();
        setrestaurant_info(data2?.data?.cards[0]?.card?.card?.info || data2?.data?.cards[1]?.card?.card?.info || data2?.data?.cards[2]?.card?.card?.info || data2?.data?.cards[3]?.card?.card?.info);
        setrestaurant_info2(data2);

    }

    function filterdata(search1) {
        const search = search1.toString().toLowerCase().split(' ').join('');
        const filterdata1 = temprestaurant_data.filter((data) => {
            return data?.info?.name?.toString().toLowerCase().split(' ').join('').includes(search);
        })
        if (filterdata1 !== undefined && filterdata1 !== null)
            setrestaurant_data(filterdata1);
    }

    function filterBestunder() {
        const filterdata2 = temprestaurant_data.filter((data) => {
            return parseFloat(data?.info?.avgRating)>=4.5 && parseFloat(data?.info?.sla?.deliveryTime) <= 30.0;
        })
        if (filterdata2 !== undefined && filterdata2 !== null)
            setrestaurant_data(filterdata2);
    }

    function filterBestVegi() {
        const filterdata2 = temprestaurant_data.filter((data) => {
            return parseFloat(data?.info?.avgRating)>=4.5 &&  data?.info?.veg;
        })
        if (filterdata2 !== undefined && filterdata2 !== null)
            setrestaurant_data(filterdata2) 
    }

    function filterBestundervegi() {
        const filterdata2 = temprestaurant_data.filter((data) => {
            return parseFloat(data?.info?.avgRating)>=4.5 &&  data?.info?.veg && parseFloat(data?.info?.sla?.deliveryTime) <= 30.0;
        })
        if (filterdata2 !== undefined && filterdata2 !== null)
            setrestaurant_data(filterdata2) 
    }

    function filterunderVegi() {
        const filterdata2 = temprestaurant_data.filter((data) => {
            return parseFloat(data?.info?.avgRating)>=4.5 &&  data?.info?.veg && parseFloat(data?.info?.sla?.deliveryTime) <= 30.0;
        })
        if (filterdata2 !== undefined && filterdata2 !== null)
            setrestaurant_data(filterdata2) 
    }

    function filterAll() {
        setrestaurant_data(temprestaurant_data);
    }

    function filterdataonratings() {
        if(filterapplied===false){
            setfilterapplied(true);
            const filterdata2 = temprestaurant_data.filter((data) => {
                return parseFloat(data?.info?.avgRating)>=4.0;
            })
            if (filterdata2 !== undefined && filterdata2 !== null)
                setrestaurant_data(filterdata2);
        }
        else{
            setfilterapplied(false);
            setrestaurant_data(temprestaurant_data);
        }
    }



    function filterAbove3() {
        if(filterapplied===false){
            setfilterapplied(true);
            const filterdata = temprestaurant_data.filter((data) => {
                return parseFloat(data?.info?.avgRating) >= 3.0;
            })
            if (filterdata!==undefined && filterdata!=null) setrestaurant_data(filterdata)
        }
        else{
            setfilterapplied(false);
            setrestaurant_data(temprestaurant_data);
        }
    }
    function filterAbove2() {
        if(filterapplied===false){
            setfilterapplied(true);
            const filterdata = temprestaurant_data.filter((data) => {
                return parseFloat(data?.info?.avgRating) >= 2.0;
            })
            if (filterdata!==undefined && filterdata!=null) setrestaurant_data(filterdata)    
        }
        else{
            setfilterapplied(false);
            setrestaurant_data(temprestaurant_data);
        }
    }
    function filterAbove1() {
        if(filterapplied===false){
            setfilterapplied(true);
            const filterdata = temprestaurant_data.filter((data) => {
                return parseFloat(data?.info?.avgRating) >= 1.0;
            })
            if (filterdata!==undefined && filterdata!=null) setrestaurant_data(filterdata)    
        }
        else{
            setfilterapplied(false);
            setrestaurant_data(temprestaurant_data);
        }
    }
    function filterBest() {
            const filterdata = temprestaurant_data.filter((data) => {
                return parseFloat(data?.info?.avgRating) >= 4.5;
            })
            if (filterdata!==undefined && filterdata!=null) setrestaurant_data(filterdata)
    }
    function filterUnder30() {
        if(filterapplied===false){
            setfilterapplied(true);
            const filterdata = temprestaurant_data.filter((data) => {
                return parseFloat(data?.info?.sla?.deliveryTime) <= 30.0;
            })
            if (filterdata!==undefined && filterdata!=null) setrestaurant_data(filterdata)    
        }
        else{
            setfilterapplied(false);
            setrestaurant_data(temprestaurant_data);
        }
    }
    function filterVegi() {
            const filterdata = temprestaurant_data.filter((data) => {
                return data?.info?.veg;
            })
            if (filterdata!==undefined && filterdata!=null) setrestaurant_data(filterdata)    
    }


    function allrestaurants() {
        setrestaurant_data(temprestaurant_data);
    }

    useEffect(() => {
        fetchdata2();
    }, [resid]);

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

    const values = {
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
        allrestaurants,
        restaurant_bannerdata,
        cartitems,
        freq,
        favres,
        userName,
        setuserName,
        filterdataonratings,
        filterAbove3,
        filterBest,
        filterAbove2,
        filterAbove1,
        filterUnder30,
        filterVegi,
        vegonly,
        setvegonly,
        filterBestunder,
        filterBestVegi,
        filterAll,
        filterunderVegi,
        filterBestundervegi,
        onsidebarclick,
        setonsidebarclick
    };

    return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}