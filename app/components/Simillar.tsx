"use client";
import React, { useEffect, useState } from "react";
import { MovieSummary } from "../type";
import { myAxios } from "../axios";
import Link from "next/link";

export const Simillar = ({ card }: { card: MovieSummary }) => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [images, setImages] = useState("");
  useEffect(() => {
    myAxios
      .get("/movie/${id}/similar?api_key=92660a80c8956c064b877d86ef45beac", {
        params: { page: 1 },
      })
      .then((res) => {
        setMovies(res.data.results.slice(0, 5));
      });
  }, []);
  return (
    <Link
      href={`/movie/${card.id}`}
      className='block'
    >
      <img
        className='aspect-230/340 w-full object-cover'
        src={`https://images.tmdb.org/t/p/w300${card.poster_path}`}
        alt={card.title}
      />
      <div className='p-2 bg-[#F4F4F5]'>
        <div className='flex items-center'>
          <svg
            width='16'
            height='18'
            viewBox='0 0 16 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.99967 3.3335L10.0597 7.50683L14.6663 8.18016L11.333 11.4268L12.1197 16.0135L7.99967 13.8468L3.87967 16.0135L4.66634 11.4268L1.33301 8.18016L5.93967 7.50683L7.99967 3.3335Z'
              fill='#FDE047'
              stroke='#FDE047'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {card.vote_average}/10
        </div>
        <div className='text-[#09090B] text-lg line-clamp-2 max-14 overflow-hidden'>
          {card.title}
        </div>
      </div>
    </Link>
  );
};
