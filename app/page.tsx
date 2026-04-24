"use client";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { useEffect, useState } from "react";
import { MovieSummary } from "./type";
import axios from "axios";
import { myAxios } from "./axios";
import { Moviecards } from "./components/Moviecards";
import { Property } from "./components/Property";
import { Popular } from "./components/Popular";
import { Toprated } from "./components/Toprated";
import { Upcoming } from "./components/Upcoming";

export default function Home() {
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
    <div className='container  '>
      <Navigation />
      {movies.map((card) => (
        <Property
          card={card}
          key={card.id}
        />
      ))}
      <p className='text-6 font-bold text-black'>Upcoming</p>

      <Upcoming />
      <p className='text-6 font-bold text-black'>Popular</p>

      <Popular />
      <p className='text-6 font-bold text-black'>Top rated</p>

      <Toprated />

      <Footer />
    </div>
  );
}
