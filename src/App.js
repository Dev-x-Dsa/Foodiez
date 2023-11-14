import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useContext, useEffect } from 'react';
import {MenuContext} from "./ContextAPI/MenuContext";
import { Outlet } from 'react-router';

function App() {

  const {restaurant_data,setrestaurant_data,fetchdata}=useContext(MenuContext);
  useEffect(()=>{
    fetchdata();
  },[]);


  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
