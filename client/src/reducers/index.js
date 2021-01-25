import {} from 'react-redux'
import { combineReducers } from 'redux'
import itemReducer from './itemReducer'

export default combineReducers({
    item: itemReducer
})