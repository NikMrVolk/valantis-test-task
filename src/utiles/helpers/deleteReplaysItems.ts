import { IItem } from '../../services/items/items.type'

export const deleteReplaysItems = (itemsArr: IItem[]): IItem[] => {
    return itemsArr.reduce((acc, el) => {
        if (!acc.find((v) => v.id == el.id)) {
            acc.push(el)
        }
        return acc
    }, [] as IItem[])
}
