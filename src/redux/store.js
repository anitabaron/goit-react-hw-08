import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
