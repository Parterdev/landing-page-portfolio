import React from 'react';

export const YoutubeIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2.5 7.1C2.5 7.1 2 9.5 2 12c0 2.5.5 4.9.5 4.9s.5 2.1 2 3.6c1.9 1.9 4.3 2 5.5 2.1 3 .3 10 .3 10 .3s2.5 0 4.4-1.9c1.5-1.5 2-3.6 2-3.6S27 14.5 27 12c0-2.5-.5-4.9-.5-4.9s-.5-2.1-2-3.6C22.6 1.6 20.2 1.5 19 1.4 16 1.1 9 1.1 9 1.1s-2.5 0-4.4 1.9c-1.5 1.5-2 3.6-2 3.6z" transform="matrix(0.85 0 0 0.85 1.8 1.8)"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);
