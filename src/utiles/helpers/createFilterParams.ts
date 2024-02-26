import { IOption } from '../../components/items/SearchForm'
import { IFilterOptions } from '../../services/items/items.type'

export const createFilterParams = ({
    selectedOption,
    searchValue,
}: {
    searchValue: string
    selectedOption: IOption | null
}): IFilterOptions | null => {
    if (selectedOption?.value && searchValue) {
        const paramsKey = selectedOption.value

        if (paramsKey === 'price' && +searchValue) {
            return { price: +searchValue }
        }
        if (paramsKey === 'brand') {
            return { brand: searchValue }
        }
        if (paramsKey === 'product') {
            return { product: searchValue }
        }
    }
    return null
}
