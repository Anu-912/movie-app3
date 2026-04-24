import React, { useEffect, useState } from "react";
import { myAxios } from "../axios";
import { MovieSummary } from "../type";
import { Moviecards } from "./Moviecards";

export const Popular = () => {
  const API_KEY = "92660a80c8956c064b877d86ef45beac";
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  useEffect(() => {
    myAxios
      .get("/movie/popular?api_key=92660a80c8956c064b877d86ef45beac")
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);
  return (
    <div>
      <div className='px-20 grid grid-cols-5 grid-rows-2 my-20 '>
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
