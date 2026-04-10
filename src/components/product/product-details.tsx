'use client';

import { ProductFull } from '@/types/product';
import Image from 'next/image';

type Props = {
  product: ProductFull;
};

export const ProductDetails = ({ product }: Props) => {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
  const addToCart = async () => {
    throw new Error('Function not implemented.');
    // actions/set-cart-state.ts
  };

  return (
    <div className="flex-1">
      <div className="text-xs text-gray-400 mb-2">CÓD: {product.id}</div>
      <div className="font-bold text-3xl mb-6">{product.label}</div>
      {/* todo: size selector */}
      <div className="font-bold text-4xl text-blue-500 mb-2">
        R$ {formattedPrice}
      </div>
      <div className="text-sm text-gray-500 mb-6">Em até 12x no cartão</div>
      <div className="flex gap-4">
        <button
          onClick={addToCart}
          className="flex-1 max-w-xs py-4 px-8 bg-blue-600 text-white border-0 rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          Adicionar ao carrinho
        </button>
        <div className="cursor-pointer hover:opacity-60 transition-opacity size-14 border border-gray-300 flex justify-center items-center rounded-sm">
          <Image
            src={'/assets/ui/heart-3-line.png'}
            alt="Adicionar aos favoritos"
            width={24}
            height={24}
            className="hover:opacity-60 transition-opacity"
          />
        </div>
        <div className="cursor-pointer hover:opacity-60 transition-opacity size-14 border border-gray-300 flex justify-center items-center rounded-sm">
          <Image
            src={'/assets/ui/share-line.png'}
            alt="Compartilhar"
            width={24}
            height={24}
            className="hover:opacity-60 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};
