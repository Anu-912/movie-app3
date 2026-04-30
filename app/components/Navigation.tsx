"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Genre, MovieSummary } from "../type";
import { tmdb } from "../tmdb";
import { Search } from "./Search";
import useTheme from "next-theme";
import { Icon } from "../icons/Icon";
import { GenreSelector } from "./GenreSelector";
import { Moon } from "../icons/Moon";
import { Sun } from "../icons/Sun";

export const Navigation = () => {
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
          <Link href='/'>
            <Icon />
          </Link>

          <div className='flex gap-3'>
            <GenreSelector />
            <Search />
          </div>

          <div>
            <button
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
              className='p-2.5 border border-[#E4E4E7] rounded-[10px] shadow-xs cursor-pointer hover:opacity-80 bg-white dark:bg-black'
            >
              {theme === "light" ?
                <Sun />
              : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
