import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from "./ContextAPI/MenuContext";
import { Outlet } from 'react-router';
import useGeolocation from 'react-hook-geolocation';

function App() {

  const { restaurant_data, setrestaurant_data, fetchdata } = useContext(MenuContext);
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [head, sethead] = useState(null);

  const geolocation = useGeolocation();

  useEffect(() => {
    if (!geolocation.error) {
      setlatitude(geolocation.latitude)
      setlongitude(geolocation.longitude)
    }
  }, [geolocation]);

  useEffect(() => {
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
