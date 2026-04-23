"use client";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { useState } from "react";
import { MovieSummary } from "./type";
import axios from "axios";
import { myAxios } from "./axios";
import { Moviecards } from "./components/Moviecards";
import { Property } from "./components/Property";

export default function Home() {
  const API_KEY = "92660a80c8956c064b877d86ef45beac";
  const [movies, setMovies] = useState<MovieSummary[]>([]);

  myAxios.get("	/movie/upcoming?api_key=${API_KEY}").then((res) => {
    setMovies(res.data.results);
  });
  return (
    <div className='container  '>
      {/* export const img = (path: string | null, size: "w185" | "w342" | "w500" | "original" = "w500") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : "/placeholder.png"; */}
      <Navigation />
      {movies.map((card) => (
        <Property
          card={card}
          key={card.id}
        />
      ))}

      <div className='px-20 grid grid-cols-5 grid-rows-2 my-20 space-x-2'>
        {movies.map((card) => (
          <Moviecards
            card={card}
            key={card.id}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
