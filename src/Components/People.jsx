import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const People = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const getPeopleData = async () => {
    try {
      const { data } = await axios.get(`/person/popular`);
      setData(data.results);
      const Genderdata = data.results.filter((item) => item.gender === 1);
      // console.log(Genderdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPeopleData();
  }, []);

  return data ? (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%] max-h-screen overflow-auto px-5">
        <div className="w-full flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-4xl  cursor-pointer"
          ></i>
          <TopNav left={20} />
          <DropDown
            title="Filter"
            options={[
              { value: "male", label: "1" },
              { value: "female", label: "2" },
            ]}
          />
        </div>
        <div className="w-full h-fit grid grid-cols-4 gap-5 mt-5 px-5 py-3">
          {data.map((item, index) => <Cards data={item} title='people' key={index} />)}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
