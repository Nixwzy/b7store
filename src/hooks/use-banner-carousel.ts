import { useCallback, useEffect, useRef, useState } from 'react';

// interval in milliseconds for banner change
const carouselInterval = 3000;

export const useBannerCarousel = (length: number) => {
  const [currentImg, setCurrentImg] = useState(0);
  const carouselTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextBanner = useCallback(() => {
    setCurrentImg((current) => (current + 1 >= length ? 0 : current + 1));
  }, [length]);

  useEffect(() => {
    carouselTimerRef.current = setInterval(nextBanner, carouselInterval);
    return () => {
      if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
    };
  }, [nextBanner]);

  const handleBannerClick = useCallback(
    (index: number) => {
      setCurrentImg(index);
      if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
      carouselTimerRef.current = setInterval(nextBanner, carouselInterval);
    },
    [nextBanner],
  );

  return { currentImg, handleBannerClick };
};
