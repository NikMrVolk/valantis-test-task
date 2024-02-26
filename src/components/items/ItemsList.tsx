import { IItem } from '../../services/items/items.type'
import Loader from '../UI/loader/Loader'
import ItemCard from './ItemCard'

interface ItemsListProps {
    elements?: IItem[]
    loading: boolean
}

export default function ItemsList({ elements, loading }: ItemsListProps) {
    if (loading) {
        return <Loader />
    }

    return (
        <ul className="flex flex-wrap justify-center gap-4">
            {elements?.map((el) => (
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
