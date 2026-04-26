"use client";
import React, { useEffect, useState, useRef } from "react";
import { img, MovieSummary } from "../type";
import { myAxios } from "../axios";

export const Property = () => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    myAxios
      .get("/movie/now_playing?api_key=92660a80c8956c064b877d86ef45beac", {
        params: { page: 1 },
      })
      .then((res) => {
        setMovies(
          res.data.results
            .filter((movie: MovieSummary) => movie.backdrop_path)
            .slice(0, 3),
        );
      });
  }, []);
  function goTo(n: number) {
    const idx = ((n % movies.length) + movies.length) % movies.length;
    setCurrent(idx);
    trackRef.current?.scrollTo({
      left: idx * trackRef.current.clientWidth,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    if (!movies.length) return;
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  });
  function handleScroll() {
    if (!trackRef.current) return;
    const idx = Math.round(
      trackRef.current.scrollLeft / trackRef.current.clientWidth,
    );
    setCurrent(idx);
  }

  return (
    <div className="relative min-w-full h-[500px] overflow-hidden bg-black ">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-none min- w-full h-full snap-start relative"
          >
            <img
              src={img(movie.backdrop_path)}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent">
              <div className="absolute bottom-16 left-10 max-w-sm text-white space-y-3">
                <p className="text-sm text-gray-300 font-medium">
                  Now Playing:
                </p>

                <h1 className="text-4xl font-black leading-tight">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="font-bold text-base">
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-400">/10</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {movie.overview}
                </p>

                <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors mt-2">
                  <span className="text-xs">▶</span>
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-xl text-black transition z-10"
      >
        ‹
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-xl text-black transition z-10"
      >
        ›
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {movies.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
