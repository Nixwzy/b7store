export const mockData = {
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
    images: ['/assets/products/camiseta-php.png',
      '/assets/products/camiseta-laravel-branca.png', 
      // just testing multiple images
    ],
    price: 19.90,
    liked: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.'
  }
};

// temporary data - will be replaced by API in the future