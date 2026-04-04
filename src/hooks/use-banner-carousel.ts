import { useEffect, useRef, useState } from 'react';

const carouselInterval = 3000;

export const useBannerCarousel = (length: number) => {
  const [currentImg, setCurrentImg] = useState(0);
  const carouselTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextBanner = () => {
    setCurrentImg((current) => (current + 1 >= length ? 0 : current + 1));
  };

  useEffect(() => {
    carouselTimerRef.current = setInterval(nextBanner, carouselInterval);
    return () => {
      if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
    };
  }, []);

  const handleBannerClick = (index: number) => {
    setCurrentImg(index);
    if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
    carouselTimerRef.current = setInterval(nextBanner, carouselInterval);
  };

  return { currentImg, handleBannerClick };
};