import axios from "axios";
export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});
const imgApi = axios.create({
  baseURL: "https://image.tmdb.org/t/p",
});
