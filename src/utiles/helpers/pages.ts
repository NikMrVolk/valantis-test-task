// не нашёл в заголовках ответа с сервера количество всех елементов при запросе
const TOTAL_ITEMS_COUNT = 8003

export const getPageCount = (limit: number, totalCount = TOTAL_ITEMS_COUNT): number => {
    return Math.ceil(totalCount / limit)
}