import React from 'react';

const AnimatedLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M39 21H23C22.4477 21 21 22.4477 21 24C21 25.5523 22.4477 27 24 27H36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 30V20.618C42 19.141 40.9632 17.9152 39.5217 17.6732L29.6136 15.939C28.5209 15.7413 27.5181 15.1119 26.8521 14.1837L24.8962 11.2921C23.9519 9.94787 22.1038 9.55167 20.7596 10.496L10.3523 17.6521C9.2847 18.3976 8.59999 19.5915 8.59999 20.8819V30C8.59999 31.3255 9.67451 32.4 11 32.4H14.2"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"

          />
          <circle cx="15" cy="33" r="3" stroke="currentColor" strokeWidth="3" />
          <circle cx="33" cy="33" r="3" stroke="currentColor" strokeWidth="3" />
           <path d="M6 21H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-0 animate-swoosh" />
           <path d="M6 24H15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-0 animate-swoosh [animation-delay:0.2s]" />
           <path d="M6 27H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-0 animate-swoosh [animation-delay:0.4s]" />
        </svg>
      </div>
      <span className="text-3xl font-bold tracking-tight text-white">
        BlinkExpress<span className="text-blue-300">*</span>
      </span>
    </div>
  );
};

export default AnimatedLogo;
