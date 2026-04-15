'use client';

import { getShippingInfo } from '@/actions/get-shipping-info';
import { getUserAddress } from '@/actions/get-user-address';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import { Address } from '@/types/address';
import { ChangeEvent, useEffect, useState, useTransition } from 'react';

export const ShippingSectionLoginY = () => {
  const { token, hydrated } = useAuthStore((state) => state);
  const cartStore = useCartStore((state) => state);
  const [addresses, setAdresses] = useState<Address[]>([]);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (hydrated && token) {
      startTransition(() => {
        getUserAddress(token).then(setAdresses);
      });
    }
  }, [token, hydrated]);

  useEffect(() => {
    if (cartStore.shipping.selectedAddressId) {
      updateShippingInfo();
    }
  }, [cartStore.shipping.selectedAddressId]);

  const handleSelectAddress = (e: ChangeEvent<HTMLSelectElement>) => {
    cartStore.clearShippingInfo();
    const id = parseInt(e.target.value);
    if (id) {
      const address = addresses.find((item) => item.id === id);
      if (address) {
        cartStore.setShipping({ zipCode: address.zipCode });
        cartStore.setShipping({ selectedAddressId: address.id });
      }
    }
  };

  const updateShippingInfo = async () => {
    if (cartStore.shipping.zipCode.length >= 8) {
      const shippingInfo = await getShippingInfo(cartStore.shipping.zipCode);
      if (shippingInfo) {
        cartStore.setShipping({
          cost: shippingInfo.cost,
          days: shippingInfo.days,
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <select
        value={cartStore.shipping.selectedAddressId ?? ''}
        onChange={handleSelectAddress}
        className="flex-1 px-6 py-5 bg-white border border-gray-200 rounded-sm"
      >
        <option value="">
          {addresses.length === 0
            ? 'Nenhum endereço encontrado'
            : 'Selecione um endereço'}
        </option>
        {addresses.map((item) => (
          <option key={item.id} value={item.id}>
            {item.street}, {item.number} - {item.city} ({item.zipCode})
          </option>
        ))}
      </select>
      <button className="cursor-pointer px-6 py-5 bg-blue-600 text-white border-0 rounded-sm">
        Adicionar um novo endereço
      </button>
    </div>
  );
};
