import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLodaingIn: false,
  loggidIn: false,
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLodaingIn = true;
    },
    isLoggidSuccses: (state) => {},
    isLoggidFailru: (state) => {},
  },
});

export const { loginUserStart } = authSlice.actions;
export default authSlice.reducer;
