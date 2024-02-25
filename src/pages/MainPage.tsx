import { useQuery } from '@tanstack/react-query'

import { itemsService } from '../services/items/items.service'
import { QueryKeysAndAction } from '../utiles/constants/reactQuery'
import PageWrapper from '../components/common/PageWrapper'
import ItemsList from '../components/items/ItemsList'

const MainPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: [QueryKeysAndAction.GET_ITEMS],
        queryFn: () => itemsService.getItemsData({ limit: 50 }),
    })

    return (
        <PageWrapper className="py-10">
            {!isLoading && data?.result ? <ItemsList elements={data.result} /> : 'Загрузка...'}
        </PageWrapper>
    )
}

export default MainPage
