import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  info: {},
};

export const ShowSlice = createSlice({
  name: "Person",
  initialState,
  reducers: {
    loadPerson: (state, action) => {
      state.info = action.payload;
    },
    removePerson: (state) => {
      state.info = {};
    },
  },
});

export const { loadPerson, removePerson } = ShowSlice.actions;

export default ShowSlice.reducer;
