import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";
import { asyncLoadMovie, removeMovie } from "../../store/actions/movieActions";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Cards from "./Cards";

const MovieCards = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
//   console.log(info.recommendation);
  useEffect(() => {
    if (id) {
      dispatch(asyncLoadMovie(id));
    }
    return () => {
      dispatch(removeMovie());
    };
  }, [id, dispatch]);
  return info ? (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%] max-h-screen overflow-auto px-5">
        <div className="w-full flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-4xl mt-10 cursor-pointer"
          ></i>
        </div>
        <div className="w-full h-fit grid grid-cols-4 gap-5 mt-5 px-5 py-3">
          {info.recommendation &&
            info.recommendation.map((item, index) => (
              <Cards data={item} title="movie" key={index} />
            ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieCards;
