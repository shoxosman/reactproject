import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.user;
      state.value.password = action.payload.password;
    },
    removeUser: (state) => {
      state.value.email = "";
      state.value.password = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
