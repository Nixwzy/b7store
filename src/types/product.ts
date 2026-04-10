export type Product = {
  id: number;
  label: string;
  image: string;
  price: number;
  liked: boolean;
};

export type ProductFull = Omit<Product, 'image'> & {
  images: string[];
  description: string;
};
