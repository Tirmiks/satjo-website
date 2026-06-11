'use client';

import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function GallerySection() {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Carousel: { infinite: false }
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <>

      
        <a data-fancybox="gallery" href="/screenshots/screen-main1.jpg" className="group block overflow-hidden rounded-xl">
          <img src="/screenshots/screen-main1.jpg" className="w-64 h-38 object-cover transition-transform group-hover:scale-105" />
        </a>
        <a data-fancybox="gallery" href="/screenshots/screen-main2.jpg" className="group block overflow-hidden rounded-xl">
          <img src="/screenshots/screen-main2.jpg" className="w-64 h-38 object-cover transition-transform group-hover:scale-105" />
        </a>
        <a data-fancybox="gallery" href="/screenshots/screen-main3.jpg" className="group block overflow-hidden rounded-xl">
          <img src="/screenshots/screen-main3.jpg" className="w-64 h-38 object-cover transition-transform group-hover:scale-105" />
        </a>
    </>
  );
}