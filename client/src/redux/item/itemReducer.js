import {v4 as uuid} from 'uuid'
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS} from './itemTypes'

const initialState = {
    items: [
        {id: uuid(), name:'eggs'},
        {id: uuid(), name:'milk'},
        {id: uuid(), name:'steak'},
        {id: uuid(), name:'water'}
    ]
}

const ItemReducer = (state = initialState, actions) => {
    switch(actions.type){
        case GET_ITEMS: return {
            ...state, 
        }
        default: return state
    }
}




export default ItemReducer