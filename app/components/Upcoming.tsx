import React, { useEffect, useState } from "react";
import { MovieSummary } from "../type";
import { myAxios } from "../axios";
import { Moviecards } from "./Moviecards";

export const Upcoming = () => {
  const API_KEY = "92660a80c8956c064b877d86ef45beac";
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  useEffect(() => {
    myAxios
      .get("/movie/upcoming?api_key=92660a80c8956c064b877d86ef45beac")
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);
  return (
    <div>
      <div className='grid grid-cols-5 grid-rows-2 space-x-8 '>
        {movies.map((card) => (
          <Moviecards
            card={card}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};
