import { useQuery } from '@tanstack/react-query'

import { itemsService } from '../services/items/items.service'

const MainPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            itemsService.start(JSON.stringify({ action: 'filter', params: { price: 17500.0 } })),
    })

    console.log(data?.result)

    if (isLoading) {
        return 'Loading...'
    }

    return (
        <ul>
            {data?.result.map((el) => (
                <li key={el}>{el}</li>
            ))}
        </ul>
    )
}

export default MainPage
