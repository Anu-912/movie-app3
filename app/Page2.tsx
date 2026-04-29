import React, { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { tmdb } from "./tmdb";
import { MovieListResponse, MovieSummary } from "./type";
import { skip } from "node:test";
const MOVIE_PER_PAGE = 12;
const currentPage = skip / MOVIE_PER_PAGE + 1;
export const Page2 = ({ card }: { card: MovieListResponse }) => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    tmdb.get("/movie/popular").then((res) => {
      setMovies(res.data.results.slice(0, 12));
    });
  }, []);
  return (
    <div className='container'>
      <Navigation />
      <p className='text-[30px] font-semibold text-black '>Upcoming</p>
      <div className='grid grid-cols-5 grid-rows-2 space-x-8'>{card.t}</div>
    </div>
  );
};
