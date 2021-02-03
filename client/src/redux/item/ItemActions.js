import axios from 'axios'
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './itemTypes'


//on line you have to fetch the itens that you intend send to DB
//first use dispatch to run the setitemsloading, and then to send the type
export const getItems = () => dispatch =>  {
    dispatch(setItemsLoading());
    axios.get('/api/items')
    .then(response => dispatch({
        type: GET_ITEMS,
        payload: response.data,
        INFO: 'get the items in the server'
    }))
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

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
        INFO: 'keep track if there any fetching'
    }
}