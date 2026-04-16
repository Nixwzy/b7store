'use client';

import { useCartStore } from '@/store/cart';
import { CartListItem } from '@/types/cart-list-item';
import Image from 'next/image';
import { useEffect } from 'react';
import { CartProductList } from './cart-product-list';
import { formatPrice } from '@/libs/utils';
import { PurchaseButton } from './purchase-button';
import Link from 'next/link';
import { ShippingSection } from '@/components/cart/shipping';

type Props = {
  items: CartListItem[];
  totalPrice: number;
};

export const CartContainer = ({ items, totalPrice }: Props) => {
  const cartStore = useCartStore((state) => state);
  const formattedSubtotal = formatPrice(totalPrice);
  const formattedShipping = formatPrice(cartStore.shipping.cost);
  const formattedTotal = formatPrice(totalPrice + cartStore.shipping.cost);

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
        <div className="flex-1 md:max-w-sm flex flex-col gap-4">
          {/* shipping section */}
          <div className="">
            <ShippingSection />
          </div>

          {/* total price section */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 p-6">
              <div className="flex justify-between items-center mb-5">
                <div className="">Subtotal</div>
                <div className="font-semibold">{formattedSubtotal}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="">Frete</div>
                <div className="font-semibold">
                  {cartStore.shipping.cost === 0 ? 'Grátis' : formattedShipping}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <div className="">Total</div>
                <div className="font-semibold text-2xl text-blue-600">
                  {formattedTotal}
                </div>
              </div>
              <div className="text-right text-xs text-gray-500 mb-5">
                À vista ou em até 12x sem juros
              </div>
              <div className="">
                <PurchaseButton />
                <div className="text-center mt-4">
                  {' '}
                  <Link
                    href={'/'}
                    className="text-xs text-gray-500 hover:underline"
                  >
                    Comprar outros produtos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
