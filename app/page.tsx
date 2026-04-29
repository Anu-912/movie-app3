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

  return (
    <div className='container  '>
      <Navigation />

      <Property />

      <div className='flex justify-between mt-3 mb-3'>
        <p className='text-6 font-bold text-black '>Upcoming</p>
        <Link
          href='/'
          className='h-9 px-4 py-1 cursor-pointer  hover:border-b-2 border-b-black border-solid '
        >
          <div className='flex items-center justify-center gap-2'>
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
          </div>
        </Link>
      </div>

      <Upcoming />
      <div className='flex justify-between mt-3 mb-3'>
        <p className='text-6 font-bold text-black '>Popular</p>
        <Link
          href='/'
          className='h-9 px-4 py-1 cursor-pointer  hover:border-b-2 border-b-black border-solid '
        >
          <div className='flex items-center justify-center gap-2'>
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
          </div>
        </Link>
      </div>

      <Popular />
      <div className='flex justify-between mt-3 mb-3'>
        <p className='text-6 font-bold text-black '>Top rated</p>
        <Link
          href='/'
          className='h-9 px-4 py-1 cursor-pointer  hover:border-b-2 border-b-black border-solid '
        >
          <div className='flex items-center justify-center gap-2'>
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
          </div>
        </Link>
      </div>
      <Toprated />

      <Footer />
    </div>
  );
}
