import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncLoadMovie, removeMovie } from "../store/actions/movieActions";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(asyncLoadMovie(id));
    }
    return () => {
      dispatch(removeMovie());
    };
  }, [id, dispatch]);  
  return <div>MovieDetails</div>;
};

export default MovieDetails;
