import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MenuContextProvider, { MenuContext } from './ContextAPI/MenuContext';
import RestaurantMenu from './components/RestaurantMenu';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LocationContext from './ContextAPI/LocationContext';
import LocationContextProvider from './ContextAPI/LocationContext';
import Favres from './components/Favres';
import UserAuth from './components/UserAuth';
import Contact from './components/Contact';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));


const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "Restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "favourite restuarants",
        element: <Favres/>
      },
      {
        path: "login-signuppage",
        element: <UserAuth/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  },


])


root.render(
  <Provider store={store}>
    <LocationContextProvider>
    <MenuContextProvider>
      <ToastContainer />
      <RouterProvider router={Approuter} />
    </MenuContextProvider>
    </LocationContextProvider>
  </Provider>
);
