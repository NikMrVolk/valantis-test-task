import { useQuery } from '@tanstack/react-query'

import { itemsService } from '../services/items/items.service'
import { QueryKeysAndAction } from '../utiles/constants/reactQuery'

const MainPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: [QueryKeysAndAction.GET_IDS],
        queryFn: () => itemsService.getItemsId({ action: QueryKeysAndAction.GET_IDS, params: {limit: 20} }),
    })

    console.log(data?.result)

    if (isLoading) {
        return 'Loading...'
    }

    return (
        <ul>
            {data?.result.map((el) => (
                <li key={el}>{el}</li>
            ))}
        </ul>
    )
}

export default MainPage
