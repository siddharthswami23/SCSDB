import axios from "../../utils/Axios";
import { loadPerson } from "../reducers/PersonSlice";
export { removePerson } from "../reducers/PersonSlice";

export const asyncLoadPerson = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const movie_credits = await axios.get(`/person/${id}/movie_credits`);
    const tv_credits = await axios.get(`/person/${id}/tv_credits`);
    const images = await axios.get(`/person/${id}/images`);
    const tagged_images = await axios.get(`/person/${id}/tagged_images`);
    const translations = await axios.get(`/person/${id}/translations`);

    const bigData = {
      detail: detail.data,
      externalid: externalid.data,
      movie_credits: movie_credits.data.cast,
      tv_credits: tv_credits.data.cast,
      images: images.data.profiles,
      tagged_images: tagged_images.data.results,
      translations: translations.data.translations.map((i) => i.english_name),
    };
    dispatch(loadPerson(bigData));
    // console.log(bigData);
  } catch (error) {
    console.error(error);
  }
};
