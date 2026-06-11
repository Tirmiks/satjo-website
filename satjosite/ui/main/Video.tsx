'use client';

import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';



export default function Video() {
    useEffect(() => {
Fancybox.bind('[data-fancybox="video"]', {
  Html: {
    youtube: {
      
      autoplay: 1,
    },
  },
} as any);

return () => Fancybox.destroy();
}, []);
    return (
        <a
        data-fancybox="video"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        className="relative group block max-w-xl mx-auto aspect-video overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl cursor-pointer"
      >
        <img
          src="/screenshots/screen-main1.jpg"  
          alt="Play Video Trailer"
          className="w-84 h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/30" />

        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-10 h-10 ml-[-3px] transition-transform group-hover:translate-x-0.5"
            >
              <path d="M9.5 7.5v9l7-4.5-7-4.5z" />
            </svg>
          </div>
        </div>
      </a>
    )
}
