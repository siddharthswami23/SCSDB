import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../store/reducers/MovieSlice";
import personReducer from "../store/reducers/PersonSlice";
import showReducer from "../store/reducers/ShowSlice";

export default configureStore({
  reducer: { 
    movie: movieReducer, 
    person: personReducer, 
    show: showReducer 
  },
});
