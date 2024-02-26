import { useEffect, useState } from 'react'

import { useItems } from '../hooks/useItems'
import { getPageCount } from '../utiles/helpers/pages'
import PageWrapper from '../components/common/PageWrapper'
import ItemsList from '../components/items/ItemsList'
import Pagination from '../components/common/Pagination'
import { IParams } from '../services/items/items.type'

const MainPage = () => {
    const [params, setParams] = useState<IParams>({
        limit: 50,
        offset: 0,
        price: 0,
        brand: '',
        product: '',
    })
    const pageCount = getPageCount(params.limit as number)

    const { data, isItemsLoading, refetch } = useItems(params)

    const handleChangePage = (pageNumber: number): void => {
        setParams({ ...params, offset: pageNumber })
    }

    useEffect(() => {
        refetch()
    }, [params.offset])

    return (
        <PageWrapper className="py-10">
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
