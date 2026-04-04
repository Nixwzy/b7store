import { data } from "@/data";
import { ProductList } from "../product-list";

type Props = {
  title: string;
  subtitle: string;
};

export const ProductSection = async ({ title, subtitle }: Props) => {
  // todo: fetch products from backend

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">{title}</h2>
      <p className="text-gray-500 text-center md:text-left">{subtitle}</p>
      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
};