import React, { useEffect, useState } from "react";
import { MovieSummary } from "../type";
import { Moviecards } from "./Moviecards";
import { myAxios } from "../axios";

export const Toprated = () => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  useEffect(() => {
    myAxios
      .get("/movie/top_rated?api_key=92660a80c8956c064b877d86ef45beac", {
        params: { page: 1 },
      })
      .then((res) => {
        setMovies(res.data.results.slice(0, 10));
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
