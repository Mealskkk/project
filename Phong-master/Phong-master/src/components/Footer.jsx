import React from 'react';

function Footer() {
  return (
    <div className="px-5 pb-10">
      <a href="https://bacsonholdings.com/" target="_blank" rel="noreferrer">
        <div>
          <div className="my-3 bg-white rounded-full block w-full p-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-200 p-1 rounded-full">
                  <img
                    src="https://apihtm.trailer.work/v1/media/file/bsh-logo-final-01-99106.png"
                    className="w-10 h-10 object-cover"
                    alt="Bac Son Holding"
                  />
                </div>
                <div className="py-2">
                  <h2 className="font-medium text-lg">Bac Son Holding</h2>
                  <p className="text-xs text-gray-400">
                    https://bacsonholdin...
                  </p>
                </div>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-gray-300"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M184 112l144 144-144 144"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Footer;
