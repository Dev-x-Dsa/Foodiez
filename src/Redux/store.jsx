import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import FavresSlice from "./Slices/FavresSlice";


const store=configureStore({
    reducer:{
        cart:CartSlice,
        favres:FavresSlice
    },
})
export default store;