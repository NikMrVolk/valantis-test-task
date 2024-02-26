import { IDefaultResponse, IFilterOptions, IParams, IResponseWithItems } from './items.type'

import { instance } from '../../utiles/api/axios'
import { QueryKeysAndAction } from '../../utiles/constants/reactQuery'

export const itemsService = {
    async getItemsId(params: IParams) {
        const response = await instance.post<IDefaultResponse>(
            ``,
            JSON.stringify({ action: QueryKeysAndAction.GET_IDS, params })
        )

        return response.data
    },

    async filterItems(filterOptions: IFilterOptions) {
        const response = await instance.post<IDefaultResponse>(
            ``,
            JSON.stringify({
                action: QueryKeysAndAction.FILTER,
                params: filterOptions,
            })
        )

        return response.data
    },

    async getItemsData(params: IParams, filterOptions: IFilterOptions | null) {
        let itemsId

        if (filterOptions) {
            itemsId = await this.filterItems(filterOptions)
        } else {
            itemsId = await this.getItemsId(params)
        }

        const response = await instance.post<IResponseWithItems>(
            ``,
            JSON.stringify({
                action: QueryKeysAndAction.GET_ITEMS,
                params: { ids: itemsId.result },
            })
        )

        return response.data
    },
}
