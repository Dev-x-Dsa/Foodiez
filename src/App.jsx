import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from "./ContextAPI/MenuContext";
import { Outlet } from 'react-router';
import useGeolocation from 'react-hook-geolocation';
import { additemtocart } from './Redux/Slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LocationContext } from './ContextAPI/LocationContext';


function App() {
  const dispatch = useDispatch();
  const { restaurant_data, setrestaurant_data, fetchdata,logout } = useContext(MenuContext);
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [head, sethead] = useState(null);
  var { cartitems, freq } = useContext(MenuContext);
  const geolocation = useGeolocation();
  const favres=useSelector(store=>store.favres.items);
  

  useEffect(() => {
    if (cartitems.length !== 0) {
      localStorage.setItem("Cart-data", JSON.stringify(cartitems));
      localStorage.setItem("Cart-freq", JSON.stringify(freq));
      localStorage.setItem("cart-len",JSON.stringify(cartitems.length));
    }
    
  }, [cartitems])

  
  useEffect(() => {
    if (favres.length !== 0) {
      localStorage.setItem("fav-items",JSON.stringify(favres));
    }
  }, [favres]);
  


  useEffect(() => {
    if (cartitems.length === 0 && localStorage.getItem('Cart-freq') && localStorage.getItem('Cart-data')  &&
    localStorage.getItem('isCartEmptied')==='false'
) {
      console.log(localStorage.getItem('cart-len'));
      freq = JSON.parse(localStorage.getItem('Cart-freq'));

      cartitems = JSON.parse(localStorage.getItem('Cart-data'));
      JSON.parse(localStorage.getItem('Cart-data')).map((item) => {
        let value = freq[item?.info?.id]
        while (value--) {
          dispatch(additemtocart(item));
        }
      })
    }
    localStorage.setItem('isCartEmptied', 'false');
  }, [])



  useEffect(() => {
    if (!geolocation.error) {
      setlatitude(geolocation.latitude)
      setlongitude(geolocation.longitude)
    }
  }, [geolocation]);

  useEffect(() => {
    console.log(latitude);
    console.log(longitude);
    fetchdata(latitude, longitude);
  }, [latitude, longitude]);

  const {onsidebarclick}=useContext(MenuContext);


  return (
    <div>
      <Header />
      <div className={`${onsidebarclick?("blur-sm brightness-50"):("blur-none")}`}>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
