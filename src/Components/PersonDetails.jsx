import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncLoadPerson, removePerson } from "../store/actions/personActions";
import Loading from "./Loading";

const PersonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  // console.log(info);

  useEffect(() => {
    if (id) {
      dispatch(asyncLoadPerson(id));
    }
    return () => {
      dispatch(removePerson());
    };
  }, [id, dispatch]);

  return info.detail ? (
    <div className="w-full max-h-screen px-[10%] py-[1%]">
      <nav className="flex ">
        <Link onClick={() => navigate(-1)} className="text-4xl mr-10">
          <i className="ri-arrow-left-line"></i>
        </Link>
      </nav>
      <div className="mt-10 flex gap-20">
        <div className="flex flex-col w-1/3 max-h-fit ">
          <img
            className=" h-[70vh] w-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt={`${info.detail.name}'s profile`}
          />
          <hr className="mt-5" />
          <nav className="flex justify-start text-white mt-[.8vh] text-[3.5vh]">
            <a
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className=" ri-earth-line"></i>
            </a>

            <a
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="px-8 ri-instagram-line"></i>
            </a>

            <a href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
              <i className="pr-8  ri-facebook-circle-fill"></i>
            </a>

            <a href={`https://x.com/${info.externalid.twitter_id}`}>
              <i className="ri-twitter-line"></i>
            </a>
          </nav>

          <div className="flex flex-col items-start  gap-3">
            <div className="flex justify-between w-full">
              <h1 className=" text-[2.6vh] opacity-50">Known For</h1>
              <p className=" text-[2.6vh]">
                {info.detail.known_for_department}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <h1 className=" text-[2.6vh] opacity-50">Born</h1>
              <p className=" text-[2.6vh]">{info.detail.birthday}</p>
            </div>
          </div>
        </div>
        <div className="text-white w-1/2">
          <h1 className=" text-[14vh] -tracking-tighter font-bold">
            {info.detail.name}
          </h1>

          <h1 className=" text-[5vh] mb-5">Biography</h1>
          <p className=" opacity-70 text-[1.5vh] w-[80%]">
            {info.detail.biography.slice(0, 500)}
            <span className="text-[#6556CD]"> more...</span>
          </p>

          <div className="flex gap-10">
            <Link
              to={`/people/details/:${id}`}
              className="p-4 mt-10 bg-[#6556CD] w-[7vw] rounded-md font-semibold text-xl whitespace-nowrap"
            >
              Movies
            </Link>
            <Link className="p-4 mt-10 bg-[#6556CD] w-[7vw] rounded-md font-semibold text-xl whitespace-nowrap">
              TV
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;