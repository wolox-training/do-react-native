import { createStore, combineReducers as CR, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';
import { fetchMiddleware, wrapCombineReducers } from 'redux-recompose';

import book from './book/reducer';

const combineReducers = wrapCombineReducers(CR);
export const rootReducer = combineReducers({ book });
const middlewares = [applyMiddleware(thunk), applyMiddleware(fetchMiddleware)];
if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}
export default createStore(rootReducer, compose(...middlewares));
