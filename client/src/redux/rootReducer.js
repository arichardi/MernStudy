import {combineReducers} from 'redux'
import itemReducer from './item/itemReducer'


const rootReducer = combineReducers({
    item: itemReducer
});

export default rootReducer