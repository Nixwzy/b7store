export const data = {
  // HARDCODED DATA (will be replaced by API in the future) ----------------------
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
  // HARDCODED DATA ---------------------------------------------------------

  // STATIC INFO ----------------------------------------------------------------------
  benefits: [
    {
      icon: '/assets/ui/truck-line.png',
      title: 'Frete Grátis',
      description: 'Acima de R$ 199,00',
    },
    {
      icon: '/assets/ui/discount-percent-line.png',
      title: 'Ofertas Imbatíveis',
      description: 'Receba descontos exclusivos',
    },
    {
      icon: '/assets/ui/arrow-left-right-line.png',
      title: 'Troca Fácil',
      description: 'Devolução em até 30 dias',
    },
  ],
  menu: [
    { label: 'Camisetas', href: 'categories/camisas' },
    { label: 'Acessórios', href: 'categories/acessorios' },
    { label: 'Kits', href: 'categories/kits' },
    { label: 'Eletrônicos', href: 'categories/eletronicos' },
  ],
  socialLinks: [
    {
      href: 'https://www.instagram.com/broxadasinistra/?hl=pt-br',
      icon: '/assets/ui/instagram-line.png',
    },
    {
      href: 'https://github.com/Nixwzy/b7store',
      icon: '/assets/ui/linkedin-line.png',
    },
    {
      href: 'https://github.com/Nixwzy/b7store',
      icon: '/assets/ui/facebook-line.png',
    },
    {
      href: 'https://github.com/Nixwzy/b7store',
      icon: '/assets/ui/twitter-x-fill.png',
    },
  ],
  // STATIC INFO ----------------------------------------------------------------------
};
