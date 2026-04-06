'use client';

import { ProductFull } from "@/types/product";

type Props = {
    product: ProductFull;
}

export const ProductDetails = ({ product }: Props) => {
    const formattedPrice = product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
    return (
        <div className="flex-1">
            <div>Cod {product.id}</div>
            <div>{product.label}</div>
            <div>R$ {formattedPrice}</div>
            <div>Em até 12x no cartão</div>
            <div>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}