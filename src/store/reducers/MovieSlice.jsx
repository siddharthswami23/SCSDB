import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
};

export const MovieSlice = createSlice({
  name: "Movie",
  initialState,
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload;
    },

    removeMovie: (state) => {
      state.info = {};
    },
  },
});

export const { loadMovie, removeMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
