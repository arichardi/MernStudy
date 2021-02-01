import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './itemTypes'

export const getItems = () => {
    return {
        type: GET_ITEMS,
        info: 'list all the itens of my state'
    }
}