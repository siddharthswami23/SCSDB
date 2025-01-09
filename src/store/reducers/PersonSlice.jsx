import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  info: {},
};

export const PersonSlice = createSlice({
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

export const { loadPerson, removePerson } = PersonSlice.actions;

export default PersonSlice.reducer;
