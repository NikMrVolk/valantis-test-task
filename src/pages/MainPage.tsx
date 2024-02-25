import { useQuery } from '@tanstack/react-query'

import { itemsService } from '../services/items/items.service'
import { QueryKeysAndAction } from '../utiles/constants/reactQuery'

const MainPage = () => {
    const { data } = useQuery({
        queryKey: [QueryKeysAndAction.GET_ITEMS],
        queryFn: () => itemsService.getItemsData({ limit: 50 }),
    })

    return (
        <ul>
            {data?.result.map((el) => (
                <li key={el.id}>{el.id}</li>
            ))}
        </ul>
    )
}

export default MainPage
