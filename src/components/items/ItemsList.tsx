import { IItem } from '../../services/items/items.type'
import ItemCard from './ItemCard'

interface ItemsListProps {
    elements: IItem[]
}

export default function ItemsList({ elements }: ItemsListProps) {
    return (
        <ul className="flex flex-wrap justify-center gap-4">
            {elements.map((el) => (
                <ItemCard
                    key={el.id}
                    id={el.id}
                    product={el.product}
                    price={el.price}
                    brand={el.brand}
                />
            ))}
        </ul>
    )
}
