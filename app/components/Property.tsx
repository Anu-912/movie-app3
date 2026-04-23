import React from "react";
import { MovieSummary } from "../type";

export const Property = ({ card }: { card: MovieSummary }) => {
  return (
    <div className='flex overflow-x-auto snap-x snap-mandatory h-150'>
      <div className='snap-start shrink-0 w-full h-150 flex-col items-start px-35 absolute '>
        <p className='py-[178px] font-normal text-[14px] text-white relative'>
          Now Playing:
        </p>
        <p className='relative'></p>
        <div className='flex gap-1 items-center relative'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 1.3335L10.06 5.50683L14.6667 6.18016L11.3333 9.42683L12.12 14.0135L8 11.8468L3.88 14.0135L4.66667 9.42683L1.33333 6.18016L5.94 5.50683L8 1.3335Z'
              fill='#FDE047'
              stroke='#FDE047'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <p className='relative'> /10</p>
        </div>
        <p className='text-3 text-white w-[302px] h-20 font-normal my-4'>
          {card.overview}
        </p>
        <button className='w-[145px] h-10 flex items-center justify-center gap-2 rounded-md relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='13'
            viewBox='0 0 11 13'
            fill='none'
          >
            <path
              d='M0.5 0.5L9.83333 6.5L0.5 12.5V0.5Z'
              stroke='#18181B'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <p className='font-semibold text-[14px] text-black relative '>
            Watch Trailer
          </p>
        </button>
        <div className='w-2 h-2 rounded-full bg-[#FFF] hover: bg-gray-50 '></div>
      </div>
    </div>
  );
};
