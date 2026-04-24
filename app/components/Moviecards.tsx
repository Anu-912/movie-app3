import React from "react";
import { img, MovieSummary } from "../type";
import Image from "next/image";

export const Moviecards = ({ card }: { card: MovieSummary }) => {
  return (
    <div>
      <div className='w-[230px] h-[439px]  rounded-md flex-col  bg-[#F4F4F5]  mx-2 space-x-2  '>
        <Image
          src={img(card.poster_path)}
          alt={card.title}
          width={185}
          height={340}
          className='cover '
        />
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
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p>{card.vote_average.toFixed(1)} /10</p>
          </div>
          <p className='font-normal  text-[18px] text-black'>{card.title}</p>
        </div>
      </div>
    </div>
  );
};
