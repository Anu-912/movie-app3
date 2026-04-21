import axios from "axios";
const myAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const imgApi = axios.create({
  baseURL: "https://image.tmdb.org/t/p",
});
