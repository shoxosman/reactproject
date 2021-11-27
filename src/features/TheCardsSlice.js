import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const TheCardsSlice = createSlice({
  name: "cart",
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

export const { addCart, removeCart } = TheCardsSlice.actions;
export default TheCardsSlice.reducer;
