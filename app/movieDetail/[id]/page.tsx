"use client";
import { useEffect, useState } from "react";
import { Footer } from "@/app/components/Footer";
import { myAxios } from "@/app/axios";
import { CastMember, MovieSummary } from "@/app/type";
import { Moviesec } from "@/app/components/Moviesec";
import { Star } from "@/app/icons/Star";
import { Movieposter } from "@/app/components/Movieposter";
import { Slide } from "@/app/components/Slide";
import Link from "next/link";
import { link } from "fs";

export default function Home({ casts }: { casts: CastMember }) {
  const [images, setImages] = useState("");
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
      <div className='flex justify-between'>
        <div>
          <p className='text-9 text-black font-bold'>{}</p>
          <p className='text-[18px] font-light text-black'>{}</p>
        </div>
        <div>
          <p className='text-3 font-medium text-black'>Rating</p>
          <div className='flex'>
            <Star />
            <div>
              <p>
                {}/{}
              </p>
              <p className='text-3 font-light  text-[#71717A]'>{}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between py-8 '>
        <Movieposter />
        <Slide />
      </div>
      <div className='flex'>
        <button className='px-[10px] py-0.5 rounded-full border-[#E4E4E7] border-solid border-[1px]'>
          {}
        </button>
      </div>
      <p className='text-4 font-light text-black'></p>
      <div className='flex gap-13 justify-start'>
        <p className='text-4 font-bold text-black'>Director</p>
        <p className='text-4 font-light text-black'>{}</p>
      </div>
      <hr className='border-[#E4E4E7]'></hr>
      <div className='flex gap-13 justify-start'>
        <p className='text-4 font-bold text-black'>Writets</p>
        <p className='text-4 font-light text-black'>{}</p>
      </div>
      <hr className='border-[#E4E4E7]'></hr>
      <div className='flex gap-13 justify-start'>
        <p className='text-4 font-bold text-black'>Actors</p>
        <p className='text-4 font-light text-black'>{casts.name}</p>
      </div>
      <hr className='border-[#E4E4E7]'></hr>
      <div className='flex justify-between items-center  '>
        <p className='text-6 font-semibold'>More like this</p>
        <Link
          href={"/"}
          className='py-2 px-4 flex items-center gap-2 text-[#09090B] text-sm font-medium hover: border-b-black border-b-2 border-solid'
        >
          See more{" "}
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.33301 8.00016H12.6663M12.6663 8.00016L7.99967 3.3335M12.6663 8.00016L7.99967 12.6668'
              stroke='#18181B'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
