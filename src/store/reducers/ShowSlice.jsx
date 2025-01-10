import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
};

export const ShowSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    loadShow: (state, action) => {
      state.info = action.payload;
    },
    removeShow: (state) => {
      state.info = {};
    },
  },
});

export const { loadShow, removeShow } = ShowSlice.actions;

export default ShowSlice.reducer;
