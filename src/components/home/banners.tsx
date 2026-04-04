'use client';
import { Banner } from '@/types/banner';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { set } from 'zod';

type Props = {
  list: Banner[];
};

let carouselTimer: NodeJS.Timeout; // timer variable to control the banner rotation interval

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
    carouselTimer = setInterval(nextBanner, 1000);
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
      {/* Slide dots: each dot represents a banner.
      Clicking a dot updates the current state, showing the corresponding banner. */}
      <div>slide dots</div>
    </div>
  );
};
