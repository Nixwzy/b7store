import { useState, useEffect, useTransition, ChangeEvent } from 'react';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import { getShippingInfo } from '@/actions/get-shipping-info';
import { getUserAddress } from '@/actions/get-user-address';
import { addUserAddress } from '@/actions/add-user-address';
import { formatPrice } from '@/libs/utils';
import { Address } from '@/types/address';

export const useShipping = () => {
  const { token, hydrated } = useAuthStore();
  const cartStore = useCartStore();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (hydrated && token) {
      startTransition(async () => {
        const data = await getUserAddress(token);
        setAddresses(data);
      });
    }
  }, [token, hydrated]);

  useEffect(() => {
    if (cartStore.shipping.selectedAddressId) {
      calculateShipping(cartStore.shipping.zipCode);
    }
  }, [cartStore.shipping.selectedAddressId]);

  const calculateShipping = async (zipCode: string) => {
    if (zipCode.length >= 8) {
      const info = await getShippingInfo(zipCode);
      if (info) {
        cartStore.setShipping({ cost: info.cost, days: info.days });
      }
    }
  };

  const handleSelectAddress = (e: ChangeEvent<HTMLSelectElement>) => {
    cartStore.clearShippingInfo();
    const id = parseInt(e.target.value);
    const address = addresses.find((item) => item.id === id);
    if (address) {
      cartStore.setShipping({ zipCode: address.zipCode, selectedAddressId: address.id });
    }
  };

  const handleAddAddress = async (address: Address) => {
    if (!token) return;
    const newAddresses = await addUserAddress(token, address);
    if (newAddresses) {
      setAddresses(newAddresses);
      setIsModalOpen(false);
    }
  };

  const getShippingMessage = () => {
    const { days } = cartStore.shipping;
    if (days === 0) return "Calcule seu frete";
    if (days === 1) return "Receba amanhã";
    return `Receba em até ${days} dias úteis`;
  };

  return {
    token,
    hydrated,
    addresses,
    isModalOpen,
    setIsModalOpen,
    cartStore,
    shippingMessage: getShippingMessage(),
    formattedCost: formatPrice(cartStore.shipping.cost),
    hasCalculated: cartStore.shipping.cost > 0,
    handleSelectAddress,
    handleAddAddress,
    calculateShipping
  };
};