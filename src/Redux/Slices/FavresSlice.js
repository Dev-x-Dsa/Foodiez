import { createSlice } from "@reduxjs/toolkit";



const FavresSlice = createSlice(
  {
  
  name: "favres",
  initialState: {
    items: [],
    setfavitems:[]
  },
  reducers: {
    additemtofav: (state, action) => {
      const newItem = action.payload;
      const itemId = newItem?.info?.id;


      let check=false;
      if(state.items.map(item=>{
        if(item?.info?.id===itemId){
          check=true;
        }
      }))
      if(!check)
      state.items.push(newItem);

      
    },

    removeitemfromfav: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item?.info?.id !== itemId);
    },

  },
});

export const { additemtofav, removeitemfromfav } = FavresSlice.actions;
export default FavresSlice.reducer;
