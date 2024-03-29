import { QueryKeysAndAction } from '../../utiles/constants/reactQuery'

export interface IDefaultResponse {
    result: string[]
}

export interface IItem {
    brand: string | null
    id: string
    price: number
    product: string
}

export interface IResponseWithItems {
    result: IItem[]
}

export interface IParams {
    offset?: number
    limit?: number
    ids?: string[]
    field?: string
}

export interface IRequestBody {
    action: QueryKeysAndAction
    params: IParams
}

export interface IFilterOptions {
    price?: number
    brand?: string
    product?: string
}
