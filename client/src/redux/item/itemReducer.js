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

const itemReducer = (state = initialState, actions) => {
    switch(actions.type){
        case GET_ITEMS: return {
            ...state
        }
        case DELETE_ITEMS: return {
            ...state, items: state.items.filter( item => item.id !== actions.payload)
        }
        case ADD_ITEMS: return {
            ...state, items: [actions.payload, ...state.items]
        };
        default: return state
    }
}




export default itemReducer