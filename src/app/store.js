import { configureStore } from "@reduxjs/toolkit";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'
import userSlice from "../features/userSlice";
import TheCardsSlice from "../features/TheCardsSlice";
export const store = configureStore({
  reducer: {
    /* count: countReducer */
    user: userSlice,
    cart: TheCardsSlice,
  },
});
