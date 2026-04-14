import { useCartStore } from '@/store/cart';
import { setCartState } from '@/actions/set-cart-state';
import { CartListItem } from '@/types/cart-list-item';

export const useCartItemActions = (item: CartListItem) => {
  const cartStore = useCartStore((state) => state);

  const syncCookie = async () => {
    const updatedCart = useCartStore.getState().cart;
    await setCartState(updatedCart);
  };

  const handleIncrease = async () => {
    cartStore.updateItemQuantity(item.product.id, item.quantity + 1);
    await syncCookie();
  };

  const handleDecrease = async () => {
    if (item.quantity > 1) {
      cartStore.updateItemQuantity(item.product.id, item.quantity - 1);
      await syncCookie();
    } else {
      await handleRemove();
    }
  };

  const handleRemove = async () => {
    cartStore.removeItem(item.product.id);
    await syncCookie();
  };

  return { handleIncrease, handleDecrease, handleRemove };
};
