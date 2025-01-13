import React, { useEffect } from "react";
import {
  asyncLoadPerson,
  removePerson,
} from "../../store/actions/personActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";
import SideNav from "./SideNav";
import Cards from "./Cards";

const PeopleTv = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  console.log(info);

  useEffect(() => {
    if (id) {
      dispatch(asyncLoadPerson(id));
    }
    return () => {
      dispatch(removePerson());
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
          {info.tv_credits.length > 0 ? (
            info.tv_credits.map((item, index) => (
              <Cards data={item} title="movie" key={index} />
            ))
          ) : (
            <h1 className="text-4xl text-white">No TV Shows Found</h1>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleTv;
