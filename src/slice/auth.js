import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLodaingIn: false,
  loggidIn: false,
  eror: null,
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLodaingIn = true;
    },
    signUserSuccses: (state, action) => {
      state.isLodaingIn = false;
      state.loggidIn = true;
      state.user = action.payload;
    },
    signUserFailrue: (state, action) => {
      state.isLodaingIn = false;
      state.eror = action.payload;
    },
  },
});

export const { signUserStart, signUserSuccses, signUserFailrue } =
  authSlice.actions;
export default authSlice.reducer;
