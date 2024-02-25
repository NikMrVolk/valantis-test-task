import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { itemsService } from '../services/items/items.service'
import { QueryKeysAndAction } from '../utiles/constants/reactQuery'
import { getPageCount } from '../utiles/helpers/pages'
import PageWrapper from '../components/common/PageWrapper'
import ItemsList from '../components/items/ItemsList'
import Pagination from '../components/common/Pagination'

const MainPage = () => {
    const [offset, setOffset] = useState<number>(0)
    const limit = 50
    const pageCount = getPageCount(limit)

    const { data, isLoading, refetch, isRefetching } = useQuery({
        queryKey: [QueryKeysAndAction.GET_ITEMS],
        queryFn: () => itemsService.getItemsData({ offset, limit }),
        enabled: false,
    })

    const isItemsLoading = isLoading || isRefetching

    const handleChangePage = (pageNumber: number): void => {
        setOffset(pageNumber)
    }

    useEffect(() => {
        refetch()
    }, [offset])

    return (
        <PageWrapper className="py-10">
            <ItemsList elements={data?.result} loading={isItemsLoading} />
            <Pagination
                changePage={handleChangePage}
                pageCount={pageCount}
                className={isItemsLoading ? 'hidden' : ''}
            />
        </PageWrapper>
    )
}

export default MainPage
