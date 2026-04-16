// src/components/cart/shipping/authenticated-form.tsx
'use client';

import { AddressModal } from '../address-modal';
import { useShipping } from './use-shipping';

export const AuthenticatedForm = () => {
  const {
    addresses,
    isModalOpen,
    setIsModalOpen,
    handleSelectAddress,
    handleAddAddress,
    cartStore,
  } = useShipping();

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

      <button
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer text-sm text-blue-600 hover:underline text-left w-fit"
      >
        Adicionar um novo endereço
      </button>

      <AddressModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddAddress}
      />
    </div>
  );
};
