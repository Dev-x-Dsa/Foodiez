import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // array of items
    itemQuantities: {}, // object to track the frequency of items
  },

  reducers: {
    additemtocart: (state, action) => {
      const newItem = action.payload;
      const itemId = newItem?.info?.id;

      // Add the item to the items array
      state.items.push(newItem);

      // Update the frequency of the item
      state.itemQuantities[itemId] = (state.itemQuantities[itemId] || 0) + 1;
    },

    removeitem: (state, action) => {
      const itemId = action.payload;
      
      // Check if the item exists in the cart
      if (state.itemQuantities[itemId] > 1) {
        // Decrease the frequency if more than 1
        state.itemQuantities[itemId] -= 1;
      } else {
        // Remove the item from the items array and reset frequency if 1 or less
        state.items = state.items.filter((item) => item?.info?.id !== itemId);
        delete state.itemQuantities[itemId];
        toast.error("Removed from cart !", {
          position: toast.POSITION.TOP_RIGHT,
      });
      }
    },

    clearcart: (state) => {
      // Clear both items array and itemQuantities
      state.items = [];
      state.itemQuantities = {};
    },
  },
});

export const { additemtocart, removeitem, clearcart } = CartSlice.actions;
export default CartSlice.reducer;
