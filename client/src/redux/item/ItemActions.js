import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './itemTypes'

export const getItems = () => {
    return {
        type: GET_ITEMS,
        info: 'list all the itens of my state',
    }
}

export const deleteItems = (id) => {
    return {
        type: DELETE_ITEMS,
        payload: id, 
        INFO: 'remove item from the list'
    }
}

export const addItems = (item) => {
    return {
        type: ADD_ITEMS,
        payload: item, 
        INFO: 'add the new item in the list'
    }
}