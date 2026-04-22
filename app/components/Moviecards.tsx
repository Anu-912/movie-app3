import React from "react";
import { MovieSummary } from "../type";

export const Moviecards = ({ card }: { card: MovieSummary }) => {
  return (
    <div className='w-[230px] h-[340px]  rounded-md flex-col border-1 border-solid border-blue-200  '>
      <div className='flex-col items-start bg-gray-50 space-x-1 space-y-1 rounded-b-md'>
        <div className='flex gap-1 items-center'>
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
          <p>{card.vote_average} /10</p>
        </div>
        <p className='font-normal text-[18px] text-black'></p>
      </div>
    </div>
  );
};
