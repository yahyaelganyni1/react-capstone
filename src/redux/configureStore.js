import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import companyReducer from './nasdaq/nasdaq';

const reducer = combineReducers({ companyReducer });

const store = createStore(reducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
