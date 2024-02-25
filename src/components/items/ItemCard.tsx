import { IItem } from '../../services/items/items.type'

interface ItemCardProps extends IItem {}

export default function ItemCard({ id, brand, product, price }: ItemCardProps) {
    return (
        <li className="flex flex-col w-80 border rounded-xl cursor-pointer shadow-md hover:scale-105 duration-300">
            <div className="h-40 bg-gray-500 rounded-t-xl"></div>
            <div className="flex flex-col gap-2 p-4 flex-auto">
                <div className="text-1.5xs">{id}</div>
                <div>{product}</div>
                <div className="font-bold italic">{brand}</div>
                <div className="font-bold text-xl grow flex items-end justify-end">{price} р.</div>
            </div>
        </li>
    )
}
