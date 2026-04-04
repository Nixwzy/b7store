'use client';
import { Banner } from '@/types/banner';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { set } from 'zod';

type Props = {
  list: Banner[];
};

// TIMEOUT CONTROL FOR BANNER CAROUSEL
let carouselTimer: NodeJS.Timeout; // timer variable to control the banner rotation interval
let carouselInterval = 3000;


export const Banners = ({ list }: Props) => {
  const [currentImg, setCurrentImg] = useState(0); // state to control which banner is currently visible

  const nextBanner = () => {
    setCurrentImg((currentImg) => {
      if (currentImg + 1 >= list.length) {
        return 0;
      } else {
        return currentImg + 1;
      }
    });
  };

  useEffect(() => {
    carouselTimer = setInterval(nextBanner, carouselInterval);
    return () => clearInterval(carouselTimer); // cleanup function to clear the timer when the component unmounts
  }, []); 
  
  return (
    <div>
      {/* banner container: relative + aspect-[3/1] defines the height proportionally.
      All banners are stacked on top of each other using absolute + inset-0.
      Only the active banner (controlled by current state) will be visible via opacity.
      The transition-all enables smooth fade between banners. */}
      <div className="relative aspect-[3/1]">
        {list.map((banner, index) => (
          <Link
            key={index}
            href={banner.link}
            style={{ opacity: currentImg === index ? 1 : 0 }}
            className="absolute inset-0 transition-all"
          >
            <Image
              src={banner.img}
              alt=""
              width={1200}
              height={400}
              className="rounded-md"
            />
          </Link>
        ))}
      </div>
      {/* slide dots */}
      <div className="mt-4 flex justify-center gap-2">
        {list.map((banner, index) => (
          <div
            key={index}
            className="size-4 bg-blue-600 rounded-full cursor-pointer"
            style={{ opacity: currentImg === index ? 1 : 0.3 }}
            
          />
        ))}
      </div>
    </div>
  );
};
