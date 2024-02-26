import { useQuery } from '@tanstack/react-query'

import { IFilterOptions, IParams } from '../services/items/items.type'
import { itemsService } from '../services/items/items.service'
import { QueryKeysAndAction } from '../utiles/constants/reactQuery'

export const useItems = (params: IParams, filterParams : IFilterOptions | null) => {

    const { data, isLoading, refetch, isRefetching, isError } = useQuery({
        queryKey: [QueryKeysAndAction.GET_ITEMS],
        queryFn: () => itemsService.getItemsData(params, filterParams),
        enabled: false,
    })

    const isItemsLoading = isLoading || isRefetching

    return { data, isItemsLoading, refetch, isError }
}
