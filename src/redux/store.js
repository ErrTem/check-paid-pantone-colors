import {
  applyMiddleware,
  compose,
  combineReducers,
  legacy_createStore as createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import homeReducer from './home-reducer';

const reducers = combineReducers({
  homePage: homeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
