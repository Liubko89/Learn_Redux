import { createSlice } from "@reduxjs/toolkit";

const changeFilter = createSlice({
  name: "contacts",
  initialState: {
    name: "",
  },

  reducers: {
    selectNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { selectNameFilter } = changeFilter.actions;

export const changeFilterReducer = changeFilter.reducer;
