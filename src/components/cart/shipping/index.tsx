'use client';

import { useShipping } from './use-shipping';
import { AuthenticatedForm } from './authenticated-form';
import { UnauthenticatedForm } from './unauthenticated-form';

export const ShippingSection = () => {
  const {
    token,
    hydrated,
    shippingMessage,
    formattedCost,
    hasCalculated,
    cartStore,
  } = useShipping();

  if (!hydrated) return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm text-gray-500">
        Calcular frete e prazo de entrega
      </h3>

      <div>{token ? <AuthenticatedForm /> : <UnauthenticatedForm />}</div>

      <div className="flex items-center bg-white border border-gray-200 rounded-sm p-6 mt-4">
        <div
          className={`flex-1 ${cartStore.shipping.days === 0 ? 'text-center' : ''}`}
        >
          {shippingMessage}
        </div>
        {hasCalculated && (
          <div className="text-green-600 font-semibold">{formattedCost}</div>
        )}
      </div>
    </div>
  );
};
