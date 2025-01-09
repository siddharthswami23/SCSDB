import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncLoadMovie, removeMovie } from "../store/actions/movieActions";
import Loading from "./Loading";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(asyncLoadMovie(id));
    }
    return () => {
      dispatch(removeMovie());
    };
  }, [id, dispatch]);

  return info.detail ? (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
      }}
      className="w-full min-h-screen px-[10%] py-10"
    >
      <nav className="flex">
        <Link onClick={() => navigate(-1)} className="text-4xl mr-10">
          <i className="ri-arrow-left-line"></i>
        </Link>
        <a className="text-4xl mr-10">
          <i className="ri-earth-line"></i>
        </a>
        <a href={info.detail.homepage} className="text-4xl mr-10">
          <i className="ri-share-box-fill"></i>
        </a>
        <a>
          <img className="h-12 " src="/imdb.png" alt="IMDB logo" />
        </a>
      </nav>
      <div className="mt-5">
        <div className="pl-5 flex gap-[12vh] text-white">
          <img
            className="head h-[50vh] w-[35vh] object-cover  "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
          />
          <div className=" leading-6">
            <div className="title leading-[6vh]">
              <h1 className=" text-[8vh] font-black tracking-wider text-white py-2 ">
                {info.detail.original_title}
                <span className=" ml-3 text-[3vh]">
                  ({info.detail.release_date.split("-")[0]})
                </span>
              </h1>
            </div>

            <div className=" text-white flex gap-9 mb-10">
              <span className=" text-[2.3vh] font-medium -tracking-tight">
                {info.detail.release_date}
              </span>
              <span className=" text-[2.3vh] font-medium -tracking-tight">
                {info.detail.genres.map((i) => i.name).join(",")}
              </span>
              <span className=" text-[2.3vh] font-medium -tracking-tight">
                {info.detail.runtime} min
              </span>
              <span className=" text-[2.3vh] font-medium -tracking-tight">
                {" "}
                <i class="mr-1 ri-star-line"></i> {info.detail.vote_average}
              </span>
            </div>

            <p className="text-[2.3vh] py-3 font-medium italic -tracking-tight">
              {info.detail.tagline}
            </p>

            <h1 className=" text-[3.7vh] font-semibold tracking-tight mt-10 mb-5 ">
              Overview
            </h1>
            <p className="text-[2.3vh] py-3 tracking-tight">
              {info.detail.overview}
            </p>

            <h1 className=" text-[3.7vh] tracking-tight font-semibold mt-10 mb-5 ">
              Movie Translated
            </h1>
            <p className="text-[2.3vh] py-3 tracking-tight">
              {info.translations.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-20" />
      <div className="flex gap-10">
        <Link className="p-4 rounded-sm mt-10 bg-[#6556CD] w-fit font-semibold text-xl whitespace-nowrap">
          Recommendations
        </Link>
        <Link className="p-4 rounded-sm mt-10 bg-[#6556CD] w-fit font-semibold text-xl whitespace-nowrap">
          Actors
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
