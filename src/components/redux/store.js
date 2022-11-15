import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from 'redux'
import homeReducer from './home-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    homePage: homeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store
export default store