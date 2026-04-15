import { getShippingInfo } from '@/actions/get-shipping-info';
import { useCartStore } from '@/store/cart';

export const ShippingSectionLoginN = () => {
  const cartStore = useCartStore((state) => state);
  const handleUpdateShipping = async () => {
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
    <div className="flex gap-4">
      <input
        type="text"
        value={cartStore.shipping.zipCode}
        onChange={(e) => cartStore.setShipping({ zipCode: e.target.value })}
        placeholder={'Digite seu CEP'}
        className="flex-1 px-6 py-5 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <button
        className="cursor-pointer px-6 py-5 bg-blue-600 text-white border-0 rounded-sm hover:bg-blue-700 transition-colors duration-300"
        onClick={handleUpdateShipping}
      >
        Calcular
      </button>
    </div>
  );
};
