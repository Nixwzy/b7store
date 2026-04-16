// src/components/cart/shipping/unauthenticated-form.tsx
'use client';

import { useShipping } from './use-shipping';

export const UnauthenticatedForm = () => {
  const { cartStore, calculateShipping } = useShipping();

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={cartStore.shipping.zipCode}
        onChange={(e) => cartStore.setShipping({ zipCode: e.target.value })}
        placeholder="Digite seu CEP"
        className="flex-1 px-6 py-5 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        className="cursor-pointer px-6 py-5 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors"
        onClick={() => calculateShipping(cartStore.shipping.zipCode)}
      >
        Calcular
      </button>
    </div>
  );
};
