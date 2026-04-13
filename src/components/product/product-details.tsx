'use client';

import { setCartState } from '@/actions/set-cart-state';
import { formatPrice } from '@/libs/utils';
import { useCartStore } from '@/store/cart';
import { ProductFull } from '@/types/product';
import { redirect } from 'next/navigation';
import Image from 'next/image';

type Props = {
  product: ProductFull;
};

export const ProductDetails = ({ product }: Props) => {
  const cartStore = useCartStore();
  const formattedPrice = formatPrice(product.price);
  const addToCart = async () => {
    cartStore.addItem({ productId: product.id, quantity: 1 });
    const updatedCart = useCartStore.getState().cart;
    await setCartState(updatedCart);
    redirect('/cart');
    console.log('Carrinho atualizado:', updatedCart);
  };

  return (
    <div className="flex-1">
      <div className="text-xs text-gray-400 mb-2">CÓD: {product.id}</div>
      <div className="font-bold text-3xl mb-6">{product.label}</div>
      {/* todo: size selector */}
      <div className="font-bold text-4xl text-blue-500 mb-2">
        {formattedPrice}
      </div>
      <div className="text-sm text-gray-500 mb-6">Em até 12x no cartão</div>

      {/* debug */}
      <div className="">carrinho {cartStore.cart.length}</div>
      {/* debug */}

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
