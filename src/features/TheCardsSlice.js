import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("value")
    ? JSON.parse(localStorage.getItem("value"))
    : [],
  
};

const TheCardsSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeCart: (state, action) => {
      state.value.forEach((product, index) => {
        if (product.name === action.payload) {
          state.value.splice(index, 1);
        }
      });
    },
    
  },
});

export const { addCart, removeCart ,Increase_Quantity,
  Decrease_Quantity, } = TheCardsSlice.actions;
export default TheCardsSlice.reducer;
