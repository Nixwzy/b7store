import { data } from "@/data";
import { ProductList } from "../product-list";

export const TopSoldProducts = async () => {
    // todo: fetch trending products from backend

    
    return (
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">Produtos mais vendidos</h2>
            <p className="text-gray-500 text-center md:text-left">Estes são os produtos mais populares da nossa loja! </p>
            <div className="mt-9">
                <ProductList list={data.products}/>
            </div>
        </div>
       
    )
};