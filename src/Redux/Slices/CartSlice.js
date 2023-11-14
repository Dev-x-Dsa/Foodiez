import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState:{
    items:[],
  },

  reducers: {
    // State is basically the what the initial state it can be updated to and action is basically what is coming in
    additemtocart: (state,action) => {
        state.items.push(action.payload);
    },
    removeitem: (state,action) => {
        state.items = state.items.filter((item) => item?.info?.id !== action.payload);
    },
    clearcart:(state)=>{
        state.items=[];
    }
  },
});

export const {additemtocart,removeitem}=CartSlice.actions;
export default CartSlice.reducer;