import React, { useEffect, useState } from "react";

export const Pagination = ({
  currentPage,
  totalPages,
  MOVIE_PER_PAGE,
}: {
  currentPage: number;
  totalPages: number;
  MOVIE_PER_PAGE: number;
}) => {
  useEffect(() => {}, []);
  const [skip, setSkip] = useState(0);
  return (
    <div className='flex'>
      <button
        disabled={currentPage === 1}
        onClick={() => {
          setSkip(currentPage - 1);
        }}
        className='h-10 px-2 py-4 flex items-center'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
        >
          <path
            d='M10 12L6 8L10 4'
            stroke='#18181B'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <p className='text-[14px] font-semibold'>Previous</p>
      </button>
      <button className='h-10 w-10 rounded-md border-[1px] border-solid border-[#E4E4E7] flex items-center justify-center'>
        <p className='text-[14px] font-semibold text-black'>{}</p>
      </button>
      <button className='h-10 px-2 py-4 flex items-center'>
        <p className='text-[14px] font-semibold'>Next</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
        >
          <path
            d='M6 12L10 8L6 4'
            stroke='#18181B'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
    </div>
  );
};
