'use client';

import { useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useCartStore } from '@/store/cart';
import { CartListItem } from '@/types/cart-list-item';
import { formatPrice } from '@/libs/utils';

import { CartProductList } from './cart-product-list';
import { PurchaseButton } from './purchase-button';
import { ShippingSection } from '@/components/cart/shipping';

type Props = {
  items: CartListItem[];
  totalPrice: number;
};

export const CartContainer = ({ items, totalPrice }: Props) => {
  const { cart, shipping, clearShippingInfo } = useCartStore();
  const totals = useMemo(() => {
    const shippingCost = shipping.cost;
    return {
      subtotal: formatPrice(totalPrice),
      shipping: shippingCost === 0 ? 'Grátis' : formatPrice(shippingCost),
      total: formatPrice(totalPrice + shippingCost),
    };
  }, [totalPrice, shipping.cost]);

  const cartQuantityLabel = `(${cart.length} ite${cart.length !== 1 ? 'ns' : 'm'})`;

  useEffect(() => {
    clearShippingInfo();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto p-4">
      <header className="flex items-center gap-2 mb-9">
        <Image
          src="/assets/ui/shopping-bag-4-line-black.png"
          alt="Ícone de sacola"
          width={24}
          height={24}
        />
        <h1 className="text-lg font-semibold">
          Sua sacola de compras:{' '}
          <span className="text-gray-500 font-normal">{cartQuantityLabel}</span>
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <main className="flex-1">
          <CartProductList items={items} />
        </main>

        <aside className="w-full md:max-w-sm flex flex-col gap-4">
          <ShippingSection />

          <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
            <div className="border-b border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">{totals.subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Frete</span>
                <span
                  className={`font-semibold ${shipping.cost === 0 ? 'text-green-600' : ''}`}
                >
                  {totals.shipping}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">Total</span>
                <span className="font-bold text-2xl text-blue-600">
                  {totals.total}
                </span>
              </div>

              <p className="text-right text-xs text-gray-400 mb-6">
                À vista ou em até 12x sem juros
              </p>

              <div className="flex flex-col gap-4">
                <PurchaseButton />

                <Link
                  href="/"
                  className="text-center text-xs text-gray-500 hover:text-blue-600 hover:underline transition-colors"
                >
                  Continuar comprando
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
