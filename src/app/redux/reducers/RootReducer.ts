import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import userReducer from './userReducer'



const RootReducer = combineReducers({
    uiReducer: uiReducer,
    userReducer: userReducer
   
})

export default RootReducer
