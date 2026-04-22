import React from "react";

export const Modes = () => {
  return (
    <div>
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d_1_3620)'>
          <path
            d='M2 11C2 5.47715 6.47715 1 12 1H28C33.5228 1 38 5.47715 38 11V27C38 32.5228 33.5228 37 28 37H12C6.47715 37 2 32.5228 2 27V11Z'
            fill='white'
            shape-rendering='crispEdges'
          />
          <path
            d='M12 1.5H28C33.2467 1.5 37.5 5.7533 37.5 11V27C37.5 32.2467 33.2467 36.5 28 36.5H12C6.7533 36.5 2.5 32.2467 2.5 27V11C2.5 5.7533 6.7533 1.5 12 1.5Z'
            stroke='#E4E4E7'
            shape-rendering='crispEdges'
          />
          <g clip-path='url(#clip0_1_3620)'>
            <path
              d='M20 12.3335V13.6668M20 24.3335V25.6668M15.2867 14.2868L16.2267 15.2268M23.7734 22.7735L24.7134 23.7135M13.3334 19.0002H14.6667M25.3334 19.0002H26.6667M16.2267 22.7735L15.2867 23.7135M24.7134 14.2868L23.7734 15.2268M22.6667 19.0002C22.6667 20.4729 21.4728 21.6668 20 21.6668C18.5273 21.6668 17.3334 20.4729 17.3334 19.0002C17.3334 17.5274 18.5273 16.3335 20 16.3335C21.4728 16.3335 22.6667 17.5274 22.6667 19.0002Z'
              stroke='#18181B'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </g>
        </g>
        <defs>
          <filter
            id='filter0_d_1_3620'
            x='0'
            y='0'
            width='40'
            height='40'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1' />
            <feGaussianBlur stdDeviation='1' />
            <feComposite
              in2='hardAlpha'
              operator='out'
            />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_1_3620'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_1_3620'
              result='shape'
            />
          </filter>
          <clipPath id='clip0_1_3620'>
            <rect
              width='16'
              height='16'
              fill='white'
              transform='translate(12 11)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
