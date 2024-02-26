import ItemCard from './ItemCard'

import Loader from '../UI/loader/Loader'

import { IItem } from '../../services/items/items.type'
import { deleteReplaysItems } from '../../utiles/helpers/deleteReplaysItems'

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
            {!elements?.length && 'Список пуст'}
            {elements &&
                deleteReplaysItems(elements).map((el) => (
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
