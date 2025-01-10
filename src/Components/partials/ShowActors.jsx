import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";
import SideNav from "./SideNav";
import Cards from "./Cards";
import { asyncLoadShow, removeShow } from "../../store/actions/showActions";

const ShowActors = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.show);

  useEffect(() => {
    if (id) {
      dispatch(asyncLoadShow(id));
    }
    return () => {
      dispatch(removeShow());
    };
  }, [id, dispatch]);

  return info && info.credits ? (
    <div className="w-full max-h-screen flex">
      <SideNav />
      <div className="w-[80%] max-h-screen overflow-auto px-5">
        <div className="w-full flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-4xl mt-10 cursor-pointer"
          ></i>
        </div>
        <div className="w-full h-fit grid grid-cols-4 gap-5 mt-5 px-5 py-3">
          {info.credits.cast.map((actor, index) => (
            <Cards data={actor} title="people" key={index} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ShowActors;
