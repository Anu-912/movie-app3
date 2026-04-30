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
import Link from "next/link";
import { Moviesec } from "./components/Moviesec";
import { tmdb } from "./tmdb";

export default function Home() {
  const [upcomings, setUpcomings] = useState<MovieSummary[]>([]);
  const [uLoading, setULoading] = useState(true);

  const [popular, setPopular] = useState<MovieSummary[]>([]);
  const [popLoading, setPopLoading] = useState(true);
  const [toprated, setToprated] = useState<MovieSummary[]>([]);
  const [topLoading, setTopLoading] = useState(true);
  useEffect(() => {
    myAxios
      .get("/movie/upcoming?api_key=92660a80c8956c064b877d86ef45beac", {
        params: { page: 1 },
      })
      .then((res) => {
        setUpcomings(res.data.results.slice(0, 10));
        setULoading(false);
      });
    myAxios
      .get("/movie/popular?api_key=92660a80c8956c064b877d86ef45beac", {
        params: { page: 1 },
      })
      .then((res) => {
        setPopular(res.data.results.slice(0, 10));
        setPopLoading(false);
      });
    myAxios
      .get("/movie/top_rated?api_key=92660a80c8956c064b877d86ef45beac", {
        params: { page: 1 },
      })
      .then((res) => {
        setToprated(res.data.results.slice(0, 10));
        setTopLoading(false);
      });
  }, []);

  return (
    <div className='container  '>
      {/* <Navigation /> */}

      <Property />

      <Moviesec
        loading={uLoading}
        movies={upcomings}
        title='Upcomings'
        link={"/movies/upcoming"}
      />
      <Moviesec
        loading={popLoading}
        movies={popular}
        title='Popular'
        link={"/movies/popular"}
      />
      <Moviesec
        loading={topLoading}
        movies={toprated}
        title='Top rated'
        link={"/movies/top_rated"}
      />

      <Footer />
    </div>
  );
}
