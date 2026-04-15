'use client';

import { formatPrice } from '@/libs/utils';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import { ShippingSectionLoginY } from './shipping/shipping-login-y';
import { ShippingSectionLoginN } from './shipping/shipping-login-n';

export const ShippingSection = () => {
  const cartStore = useCartStore((state) => state);
  const formatShippingCost = formatPrice(cartStore.shipping.cost);
  const formatShippingDays =
    cartStore.shipping.days === 0 ? (
      <div className="text-center">Calcule seu frete</div>
    ) : cartStore.shipping.days === 1 ? (
      'Receba amanhã'
    ) : (
      `Receba em até ${cartStore.shipping.days} dias úteis`
    );

  const { token, hydrated } = useAuthStore((state) => state);
  if (!hydrated) return null;
  const calculatedShipping = cartStore.shipping.cost > 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-gray-500">
        Calcular frete e prazo de entrega
      </div>
      <div className="">
        {!token && <ShippingSectionLoginN />}
        {token && <ShippingSectionLoginY />}
      </div>
      <div className="flex items-center bg-white border border-gray-200 rounded-sm p-6 mt-4">
        <div className="flex-1">{formatShippingDays}</div>
        {calculatedShipping && (
          <div className="text-green-600 font-semibold">
            {formatShippingCost}
          </div>
        )}
      </div>
    </div>
  );
};
