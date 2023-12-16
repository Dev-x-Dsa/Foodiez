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
import { useDispatch } from 'react-redux';
import { LocationContext } from './ContextAPI/LocationContext';

function App() {
  const dispatch = useDispatch();
  const { restaurant_data, setrestaurant_data, fetchdata } = useContext(MenuContext);
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [head, sethead] = useState(null);
  var { cartitems, freq } = useContext(MenuContext);
  const geolocation = useGeolocation();

  useEffect(() => {
    if (cartitems.length !== 0) {
      localStorage.setItem("Cart-data", JSON.stringify(cartitems));
      localStorage.setItem("Cart-freq", JSON.stringify(freq));
      localStorage.setItem("cart-len",JSON.stringify(cartitems.length));
    }
  }, [cartitems])


  useEffect(() => {
    console.log(localStorage.getItem('isCartEmptied'));
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




  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
