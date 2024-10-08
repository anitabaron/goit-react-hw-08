import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    token: null,
    user: {
      name: null,
      email: null,
    },
  },
  extraReducers: (builder) => {},
});

export const authReducer = authSlice.reducer;
