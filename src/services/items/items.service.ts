import { IResponse } from './items.type'

import { instance } from '../../utiles/api/axios'

export const itemsService = {
    async start(data: string) {
        const response = await instance.post<IResponse>(``, data)

        return response.data
    },
}
