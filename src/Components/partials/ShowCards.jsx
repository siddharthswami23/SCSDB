import React, { useEffect } from "react";
import SideNav from "./SideNav";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadShow, removeShow } from "../../store/actions/showActions";
import Loading from "../Loading";
import Cards from "./Cards";

const ShowCards = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.show);
  //   console.log(info);

  useEffect(() => {
    if (id) {
      dispatch(asyncLoadShow(id));
    }
    return () => {
      dispatch(removeShow());
    };
  }, [id, dispatch]);
  return info.detail ? (
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

export default ShowCards;
