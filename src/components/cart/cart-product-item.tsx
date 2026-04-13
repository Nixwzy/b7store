import { CartListItem } from "@/types/cart-list-item"
import { formatPrice } from '@/libs/utils';
import Image from "next/image";

type Props = {
    item: CartListItem;
}
export const CartProductItem = ({ item }: Props) => {
    const formattedPrice = formatPrice(item.product.price);
    return (
        <div className="flex p-6 gap-4 md:gap-8">
            <div className="border border-gray-200 p-1">
                <Image src={item.product.image} alt={item.product.label} width={96} height={96} />
            </div>
            <div className="flex-1 flex flex-col md:flex-row justify-between">
                <div className="">{item.product.label}</div>
                <div className="">quantity button</div>
            </div>
            <div className="flex-1 flex flex-col md:flex-row justify-between">
                <div className="">{formattedPrice}</div>
                <div className="">remove button</div>
            </div>
        </div>
    )
}