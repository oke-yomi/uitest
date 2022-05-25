import React from "react";

const CartImg = () => {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_1)">
        <circle cx="57" cy="53" r="31" fill="#549A9A" />
      </g>
      <path
        d="M73 50.3215V51.393C73 52.2806 72.4031 53.0001 71.6667 53.0001H71.2222L69.7715 65.2403C69.5838 66.8238 68.4587 68 67.1317 68H46.8683C45.5413 68 44.4162 66.8238 44.2284 65.2403L42.7778 53.0001H42.3333C41.5969 53.0001 41 52.2806 41 51.393V50.3215C41 49.4339 41.5969 48.7144 42.3333 48.7144H46.0745L52.0067 38.8827C52.5842 37.9257 53.696 37.714 54.4901 38.4101C55.2842 39.1062 55.4597 40.4463 54.8822 41.4034L50.4709 48.7144H63.5291L59.1178 41.4034C58.5403 40.4463 58.7159 39.1061 59.5099 38.41C60.3039 37.7139 61.4158 37.9255 61.9933 38.8826L67.9255 48.7144H71.6667C72.4031 48.7144 73 49.4339 73 50.3215ZM58.3333 62.1072V54.6072C58.3333 53.7196 57.7364 53.0001 57 53.0001C56.2636 53.0001 55.6667 53.7196 55.6667 54.6072V62.1072C55.6667 62.9948 56.2636 63.7143 57 63.7143C57.7364 63.7143 58.3333 62.9948 58.3333 62.1072ZM64.5556 62.1072V54.6072C64.5556 53.7196 63.9586 53.0001 63.2222 53.0001C62.4858 53.0001 61.8889 53.7196 61.8889 54.6072V62.1072C61.8889 62.9948 62.4858 63.7143 63.2222 63.7143C63.9586 63.7143 64.5556 62.9948 64.5556 62.1072ZM52.1111 62.1072V54.6072C52.1111 53.7196 51.5142 53.0001 50.7778 53.0001C50.0414 53.0001 49.4444 53.7196 49.4444 54.6072V62.1072C49.4444 62.9948 50.0414 63.7143 50.7778 63.7143C51.5142 63.7143 52.1111 62.9948 52.1111 62.1072Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_0_1"
          x="0"
          y="0"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_0_1"
          />
          <feOffset dx="-1" dy="3" />
          <feGaussianBlur stdDeviation="11" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.551146 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CartImg;
