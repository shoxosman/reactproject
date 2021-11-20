import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "uheduehdeudheud",
      price: 25,
      image:
        "https://fyf.tac-cdn.net/images/products/large/TEV12-4.jpg?auto=webp&quality=80&width=590",
    },
  ],
  cart: [],
  currentItem: [],
};

const TheCardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
});

export default TheCardsSlice.reducer;
