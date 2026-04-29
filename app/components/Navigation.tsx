"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Genre, MovieSummary } from "../type";
import { tmdb } from "../tmdb";
import { Search } from "./Search";
import useTheme from "next-theme";
import { Icon } from "../icons/Icon";

export const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const [genres, setGenres] = useState<MovieSummary[]>([]);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    tmdb.get("/genre/movie/list").then((res) => {
      setGenres(res.data.genres);
    });
  }, []);

  return (
    <header className='py-[11.5px]'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link href='/'>
            <Icon />
          </Link>

          {/* Center: Genre + Search */}
          <div className='flex gap-3'>
            <div>
              <button
                onClick={() => {
                  setVisible(!visible);
                }}
                className='flex gap-2 items-center font-medium text-[#181818] px-4 py-2.5 border border-[#E4E4E7] rounded-[10px] shadow-xs cursor-pointer hover:opacity-80'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 6L8 10L12 6'
                    stroke='#18181B'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Genre
              </button>
              <div
                data-shown={visible}
                className={`absolute duration-300  p-5 bg-white border border-[#E4E4E7] rounded-lg mt-1 data-[shown=true]:visible data-[shown=true]:opacity-100 invisible opacity-0`}
                // className={`absolute duration-300  p-5 bg-white border border-[#E4E4E7] rounded-lg mt-1 ${
                //   isVisible ? "invisible opacity-0" : "visible opacity-100"
                // }`}
              >
                <div className='mt-1 font-semibold text-2xl text-[#09090B]'>
                  Genres
                </div>
                <div className='text-[#09090B]'>
                  See lists of movies by genre
                </div>
                <hr className='border border-[#E4E4E7] my-4' />
                <div className='flex flex-wrap gap-4 max-w-[540px]'>
                  {genres.map((genre) => (
                    <button
                      key={genre.id}
                      className='border cursor-pointer hover:opacity-80 duration-300 text-xs font-semibold py-0.5 pl-2.5 pr-1 border-[#E4E4E7] rounded-full flex items-center gap-2'
                    >
                      {genre.name}
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6 12L10 8L6 4'
                          stroke='#09090B'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Search />
          </div>

          <button className='p-2.5 border border-[#E4E4E7] rounded-[10px] shadow-xs cursor-pointer hover:opacity-80 transition-opacity'>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.5 0.5C5.70435 1.29565 5.25736 2.37478 5.25736 3.5C5.25736 4.62522 5.70435 5.70435 6.5 6.5C7.29565 7.29565 8.37478 7.74264 9.5 7.74264C10.6252 7.74264 11.7044 7.29565 12.5 6.5C12.5 7.68669 12.1481 8.84673 11.4888 9.83342C10.8295 10.8201 9.89246 11.5892 8.7961 12.0433C7.69975 12.4974 6.49335 12.6162 5.32946 12.3847C4.16558 12.1532 3.09648 11.5818 2.25736 10.7426C1.41825 9.90353 0.846802 8.83443 0.615291 7.67054C0.38378 6.50666 0.5026 5.30026 0.956725 4.2039C1.41085 3.10754 2.17989 2.17047 3.16658 1.51118C4.15328 0.851894 5.31331 0.5 6.5 0.5Z'
                stroke='#18181B'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            ></svg>
            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2121_7625)">
<path d="M8.00004 1.3335V2.66683M8.00004 13.3335V14.6668M3.28671 3.28683L4.22671 4.22683M11.7734 11.7735L12.7134 12.7135M1.33337 8.00016H2.66671M13.3334 8.00016H14.6667M4.22671 11.7735L3.28671 12.7135M12.7134 3.28683L11.7734 4.22683M10.6667 8.00016C10.6667 9.47292 9.4728 10.6668 8.00004 10.6668C6.52728 10.6668 5.33337 9.47292 5.33337 8.00016C5.33337 6.5274 6.52728 5.3335 8.00004 5.3335C9.4728 5.3335 10.6667 6.5274 10.6667 8.00016Z" stroke="#18181B" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2121_7625">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg> */}
          </button>
        </div>
      </div>
    </header>
  );
};
