import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdjZGViOTdkYWZjZjcyNzg5ZjEyY2E1YmUyMTU1ZSIsIm5iZiI6MTcyODg4NTk3NC4wMTczNzgsInN1YiI6IjY3MGNiMDAyZjU4YTkyMDZhYTQxNDQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fbNqNMNPPxQzecrSrtW0MvBE_ocoZsTyHPU7ZN0YaGQ'
  }
});

export default instance;
