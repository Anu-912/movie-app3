import React, { useEffect, useState } from "react";
import { tmdb } from "../tmdb";

export const Search = () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    tmdb.get("/search/movie").then((res) => {
      setSearch(res.data);
    });
  }, []);
  return (
    <div className='relative items-center flex '>
      <svg
        className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <path
          d='M14 14L10.0001 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z'
          stroke='#71717A'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <input
        className='pl-9 pr-3 w-[379px] h-9 rounded-md border border-[#E4E4E7] text-sm outline-none focus:border-indigo-400 transition-colors'
        type='text'
        placeholder='Search..'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
