'use client';

import { useCartStore } from '@/store/cart';
import { CartListItem } from '@/types/cart-list-item';
import Image from 'next/image';
import { useEffect } from 'react';
import { CartProductList } from './cart-product-list';
type Props = {
  items: CartListItem[];
  totalPrice: number;
};

export const CartContainer = ({ items, totalPrice }: Props) => {
  const cartStore = useCartStore((state) => state);

  useEffect(() => {
    cartStore.clearShippingInfo();
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={'/assets/ui/shopping-bag-4-line-black.png'}
          alt="Cart Image"
          width={24}
          height={24}
        />
        <div className="text-lg font-semibold">
          Sua sacola de compras:{' '}
          <span className="text-gray-500 font-normal">
            ({cartStore.cart.length} ite
            {cartStore.cart.length !== 1 ? 'ns' : 'm'})
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-9">
        <div className="flex-1">
          <CartProductList items={items} />
        </div>
        <div className="flex-1 md:max-w-sm">Info</div>
      </div>
    </div>
  );
};
