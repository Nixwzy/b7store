import { CartItem } from '@/types/cart-item';
import { create } from 'zustand/react';

type ShippingInfo = {
  zipCode: string;
  cost: number;
  days: number;
  selectedAddressId: number | null;
};

type CartState = {
  cart: CartItem[];
  shipping: ShippingInfo;
  addItem: (cartItem: CartItem) => void;
  removeItem: (productId: string | number) => void;
  updateItemQuantity: (productId: string | number, quantity: number) => void;
  setShipping: (info: Partial<ShippingInfo>) => void;
  clearCart: () => void;
  clearShippingInfo: () => void;
};

const initialShipping: ShippingInfo = {
  zipCode: '',
  cost: 0,
  days: 0,
  selectedAddressId: null,
};

const initialState = {
  cart: [] as CartItem[],
  shipping: initialShipping,
};

export const useCartStore = create<CartState>((set) => ({
  ...initialState,

  addItem: ({ productId, quantity }) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.productId === productId,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }

      return { cart: [...state.cart, { productId, quantity }] };
    }),

  removeItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),

  updateItemQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    })),

  setShipping: (info) =>
    set((state) => ({ shipping: { ...state.shipping, ...info } })),

  clearCart: () => set(initialState),

  clearShippingInfo: () => set({ shipping: initialShipping }),
}));
