import axios from "../../utils/Axios";
import { loadMovie } from "../reducers/MovieSlice";
export { removeMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendation = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const credits = await axios.get(`/movie/${id}/credits`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

    const bigData = {
      detail: detail.data,
      externalid: externalid.data,
      recommendation: recommendation.data.results,
      credits: credits.data,
      similar: similar.data.results,
      translations: translations.data.translations.map((i) => i.english_name),
      videos: videos.data.results.find((t) => t.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };

    dispatch(loadMovie(bigData));
    // console.log(bigData);
  } catch (error) {
    console.error(error);
  }
};
