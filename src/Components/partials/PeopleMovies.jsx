import React, { useEffect } from "react";
import {
  asyncLoadPerson,
  removePerson,
} from "../../store/actions/personActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";

const PeopleMovies = () => {
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
  return info.detail ? <div>People</div> : <Loading />;
};

export default PeopleMovies;
