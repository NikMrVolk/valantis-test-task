import { IDefaultResponse, IRequestBody } from './items.type'

import { instance } from '../../utiles/api/axios'

export const itemsService = {
    async getItemsId(data: IRequestBody) {
        const response = await instance.post<IDefaultResponse>(``, JSON.stringify(data))

        return response.data
    },
}
