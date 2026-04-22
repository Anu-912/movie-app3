import axios from "axios";
export const myAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
const imgApi = axios.create({
  baseURL: "https://image.tmdb.org/t/p",
});
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjY2MGE4MGM4OTU2YzA2NGI4NzdkODZlZjQ1YmVhYyIsIm5iZiI6MTc3NjgyMDU5My4xMzQsInN1YiI6IjY5ZTgyMTcxZGVjNDI2NzQwNmUwY2EyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q5VXo0SAbjP6oGzVhbBbAi0mGp63IA5XjdQrkddAVZA";
