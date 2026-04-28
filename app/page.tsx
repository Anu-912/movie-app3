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
import { Page2 } from "./Page2";

export default function Home() {
  const API_KEY = "92660a80c8956c064b877d86ef45beac";
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    myAxios
      .get("/movie/upcoming?api_key=92660a80c8956c064b877d86ef45beac")
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);
  // if (loading) return ()
  return (
    <div className='container  '>
      <Navigation />

      <Property />

      <div className='flex justify-between'>
        <p className='text-6 font-bold text-black'>Upcoming</p>
        <button className='h-9 px-4 py-2 cursor-pointer hover: border-b-black border-0.5 border-solid'>
          <Link
            href='/'
            className='flex items-center justify-center gap-2'
          >
            <p className='text-[14px] font-semibold '>See more</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M3.33337 8.00016H12.6667M12.6667 8.00016L8.00004 3.3335M12.6667 8.00016L8.00004 12.6668'
                stroke='#18181B'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </button>
      </div>

      <Upcoming />
      <div className='flex justify-between'>
        <p className='text-6 font-bold text-black'>Popular</p>
        <button className='h-9 w-30 px-4 py-2 cursor-pointer hover:border-b-black border-0.5 border-solid'>
          <Link
            href=''
            className='flex items-center justify-center gap-2'
          >
            <p className='text-[14px] font-semibold '>See more</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M3.33337 8.00016H12.6667M12.6667 8.00016L8.00004 3.3335M12.6667 8.00016L8.00004 12.6668'
                stroke='#18181B'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </button>
      </div>

      <Popular />
      <div className='flex justify-between'>
        <p className='text-6 font-bold text-black'>Top rated</p>
        <button className='h-9 px-4 py-2 cursor-pointer hover:border-b-black border-0.5 border-solid'>
          <Link
            href=''
            className='flex items-center justify-center gap-2'
          >
            <p className='text-[14px] font-semibold '>See more</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M3.33337 8.00016H12.6667M12.6667 8.00016L8.00004 3.3335M12.6667 8.00016L8.00004 12.6668'
                stroke='#18181B'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </button>
      </div>

      <Toprated />

      <Footer />
    </div>
  );
}
