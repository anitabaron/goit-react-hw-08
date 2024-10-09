import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
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
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      });
  },
});

export const authReducer = authSlice.reducer;
