import { data } from "@/data";
import { ProductList } from "../product-list";

export const TrendingProducts = async () => {
    // todo: fetch trending products from backend

    
    return (
        <div className="mt-10">
            <h2 className="text-2xl">Produtos em alta</h2>
            <p className="text-gray-500">Escolhas populares dos clientes</p>
            <div className="mt-9">
                <ProductList list={data.products}/>
            </div>
        </div>
       
    )
};