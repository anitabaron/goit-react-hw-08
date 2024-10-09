import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    token: null,
    user: {
      name: null,
      email: null,
      password: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
          password: null,
        };
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
          password: null,
        };
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
          password: null,
        };
      });
  },
});

export const authReducer = authSlice.reducer;
