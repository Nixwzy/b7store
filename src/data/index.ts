import { mockData } from './mock';
import { staticData } from './static';

export const data = {
  banners: mockData.banners,
  products: mockData.products,
  product: mockData.product,
  ...staticData,
};
