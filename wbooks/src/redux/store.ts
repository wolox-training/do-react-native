import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import book from './book/reducer';

export const rootReducer = combineReducers({ book });
const middlewares = [applyMiddleware(thunk, fetchMiddleware)];
if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}
export default createStore(rootReducer, compose(...middlewares));
