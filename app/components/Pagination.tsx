import React from "react";

export const Pagination = () => {
  return (
    <div className='flex'>
      <button className='h-10 px-2 py-4 flex items-center'>
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
      <button></button>
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
