'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  data: Product;
};
export const ProductItem = ({ data }: Props) => {
  const [liked, setLiked] = useState(data.liked);
  const link = `/product/${data.id}`;
  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6 ">
      <div className="flex justify-end">
        <div
          onClick={handleLikeToggle}
          className="cursor-pointer size-12 flex justify-center items-center ml-auto"
        >
          {liked && (
            <Image
              src="/assets/ui/heart-3-fill.png"
              alt=""
              width={24}
              height={24}
            />
          )}
          {!liked && (
            <Image
              src="/assets/ui/heart-3-line.png"
              alt=""
              width={24}
              height={24}
            />
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            className="max-w-full h-48"
          />
        </Link>
      </div>
      <div className="mt-9 text-lg font-bold md:text-center">
        <Link href={link}>{data.label}</Link>
      </div>
      <div className="mt-3 text-xl font-bold text-blue-600 md:text-center">
        <Link href={link}>
          R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Link>
      </div>
      <div className="mt-5 text-gray-400 md:text-center">
        <Link href={link}>À vista ou em até 12x sem juros</Link>
      </div>
    </div>
  );
};
