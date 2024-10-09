import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
      number: "",
    },
  },
  reducers: {
    setFilter(state, action) {
      const { name, number } = action.payload;
      if (name !== undefined) state.filters.name = name;
      if (number !== undefined) state.filters.number = number;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
