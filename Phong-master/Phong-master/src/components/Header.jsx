import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between p-5">
      <div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-white"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" x="336" y="336" rx="8" ry="8"></rect>
          <rect width="64" height="64" x="272" y="272" rx="8" ry="8"></rect>
          <rect width="64" height="64" x="416" y="416" rx="8" ry="8"></rect>
          <rect width="48" height="48" x="432" y="272" rx="8" ry="8"></rect>
          <rect width="48" height="48" x="272" y="432" rx="8" ry="8"></rect>
          <rect width="80" height="80" x="336" y="96" rx="8" ry="8"></rect>
          <rect
            width="176"
            height="176"
            x="288"
            y="48"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            rx="16"
            ry="16"
          ></rect>
          <rect width="80" height="80" x="96" y="96" rx="8" ry="8"></rect>
          <rect
            width="176"
            height="176"
            x="48"
            y="48"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            rx="16"
            ry="16"
          ></rect>
          <rect width="80" height="80" x="96" y="336" rx="8" ry="8"></rect>
          <rect
            width="176"
            height="176"
            x="48"
            y="288"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            rx="16"
            ry="16"
          ></rect>
        </svg>
      </div>
      <div>
        <a href="https://card.hotromua.com/">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-white"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
            ></path>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Header;
