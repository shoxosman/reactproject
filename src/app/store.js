import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../features/TheApiSlice"
import userSlice from "../features/userSlice";
import TheCardsSlice from "../features/TheCardsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: TheCardsSlice,
    api: productsApiSlice.reducer
  },
});
