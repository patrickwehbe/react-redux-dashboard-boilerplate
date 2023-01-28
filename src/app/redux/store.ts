
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/RootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {};
const middleware = [thunk];
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, RootReducer)
  
//this is for redux devtool purpose
declare global {
interface Window {
 __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
}
}

const store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middleware), (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any));
let persistor = persistStore(store)
export  {store, persistor};