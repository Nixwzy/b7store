import { data } from "@/data";
import { ProductList } from "../product-list";

export const TopViewedProducts = async () => {
    // todo: fetch trending products from backend

    
    return (
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">Produtos mais vistos</h2>
            <p className="text-gray-500 text-center md:text-left">Estes produtos na mira dos nossos clientes! </p>
            <div className="mt-9">
                <ProductList list={data.products}/>
            </div>
        </div>
       
    )
};