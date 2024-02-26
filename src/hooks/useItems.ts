import { useQuery } from '@tanstack/react-query'

import { IParams } from '../services/items/items.type'
import { itemsService } from '../services/items/items.service'
import { QueryKeysAndAction } from '../utiles/constants/reactQuery'

export const useItems = (params: IParams) => {
    const { data, isLoading, refetch, isRefetching } = useQuery({
        queryKey: [QueryKeysAndAction.GET_ITEMS],
        queryFn: () => itemsService.getItemsData(params),
        enabled: false,
    })

    const isItemsLoading = isLoading || isRefetching

    return { data, isItemsLoading, refetch }
}
