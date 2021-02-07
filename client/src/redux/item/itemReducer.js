import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING} from './itemTypes'

const initialState = {
    items: [],
    loading: false
}

const itemReducer = (state = initialState, actions) => {
    switch(actions.type){
        case GET_ITEMS: return {
            ...state,
            items: actions.payload,
            loading: false
        }
        case DELETE_ITEMS: return {
            ...state, items: state.items.filter( item => item._id !== actions.payload)
        }
        case ADD_ITEMS: return {
            ...state, items: [actions.payload, ...state.items]
        }
        case ITEMS_LOADING: return {
            ...state, loading: true
        }
        default: return state
    }
}




export default itemReducer