import { useEffect, useState } from 'react'

import { useItems } from '../hooks/useItems'
import { getPageCount } from '../utiles/helpers/pages'
import { createFilterParams } from '../utiles/helpers/createFilterParams'
import { IParams } from '../services/items/items.type'
import PageWrapper from '../components/common/PageWrapper'
import ItemsList from '../components/items/ItemsList'
import Pagination from '../components/common/Pagination'
import SearchForm, { IOption } from '../components/items/SearchForm'

const MainPage = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState<IOption | null>(null)
    const [params, setParams] = useState<IParams>({
        limit: 50,
        offset: 0,
    })
    const pageCount = getPageCount(params.limit as number)
    const filterParams = createFilterParams({
        searchValue,
        selectedOption,
    })

    const { data, isItemsLoading, refetch } = useItems(params, filterParams)

    const handleChangePage = (pageNumber: number): void => {
        setParams({ ...params, offset: pageNumber })
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        refetch()
    }

    useEffect(() => {
        refetch()
    }, [params.offset])

    return (
        <PageWrapper className="py-10">
            <SearchForm
                onSubmit={handleSearch}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <ItemsList elements={data?.result} loading={isItemsLoading} />
            <Pagination
                changePage={handleChangePage}
                pageCount={pageCount}
                className={isItemsLoading || !data?.result.length ? 'hidden' : ''}
            />
        </PageWrapper>
    )
}

export default MainPage
