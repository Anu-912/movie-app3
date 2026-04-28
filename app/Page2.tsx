import React, { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { tmdb } from "./tmdb";
import { MovieSummary } from "./type";

export const Page2 = () => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  useEffect(() => {
    tmdb.get("/movie/popular").then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <div className='container'>
      <Navigation />
      <p className='text-[30px] font-semibold text-black '>Upcoming</p>
      <div className='grid grid-cols-5 grid-rows-2 space-x-8'></div>
    </div>
  );
};
