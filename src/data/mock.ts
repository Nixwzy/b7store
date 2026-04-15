// temporary data - will be replaced by API in the future

import { Product, ProductFull } from '@/types/product';
import { Address } from '@/types/address';
import { Banner } from '@/types/banner';

export const mockData: {
  banners: Banner[];
  products: Product[];
  product: ProductFull;
  addresses: Address[];
} = {
  banners: [
    { img: '/assets/banners/banner-1.png', link: '' },
    { img: '/assets/banners/banner-2.png', link: '' },
    { img: '/assets/banners/banner-3.png', link: '' },
    { img: '/assets/banners/banner-4.png', link: '' },
  ],
  products: [
    {
      id: 1,
      label: 'Camisa PHP',
      image: '/assets/products/camiseta-php.png',
      price: 60.0,
      liked: false,
    },
    {
      id: 2,
      label: 'Camisa Laravel',
      image: '/assets/products/camiseta-laravel-branca.png',
      price: 60.0,
      liked: false,
    },
    {
      id: 3,
      label: 'Camisa NodeJS',
      image: '/assets/products/camiseta-node.png',
      price: 60.0,
      liked: false,
    },
    {
      id: 4,
      label: 'Camisa React',
      image: '/assets/products/camiseta-react-azul.png',
      price: 60.0,
      liked: false,
    },
  ],
  product: {
    id: 1,
    label: 'Camisa PHP',
    images: [
      '/assets/products/camiseta-php.png',
      '/assets/products/camiseta-laravel-branca.png',
      // just testing multiple images
    ],
    price: 19.9,
    liked: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.',
  },
  addresses: [
    {
      id: 1,
      zipCode: '12345678',
      street: 'Rua Teste 1',
      number: '10',
      city: 'Cidade Teste 1',
      state: 'Estado Teste 1',
      country: 'País Teste 1',
    },
    {
      id: 2,
      zipCode: '23456789',
      street: 'Rua Teste 2',
      number: '20',
      city: 'Cidade Teste 2',
      state: 'Estado Teste 2',
      country: 'País Teste 2',
      complement: 'Casa',
    },
    {
      id: 3,
      zipCode: '34567890',
      street: 'Rua Teste 3',
      number: '30',
      city: 'Cidade Teste 3',
      state: 'Estado Teste 3',
      country: 'País Teste 3',
      complement: 'Apartamento',
    },
  ],
};
