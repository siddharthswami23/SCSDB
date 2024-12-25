import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmU3NmI4MTA5M2RlNGYxZjhmMDhmZjVhNzRiNGFlNyIsIm5iZiI6MTcyODg4NDczOC44OTEsInN1YiI6IjY3MGNiMDAyZjU4YTkyMDZhYTQxNDQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.06wzyPYe7VA_uOEjbkC7jpwcOk-Ay9ubpbOGEcqSJHA",
  },
});

export default instance;