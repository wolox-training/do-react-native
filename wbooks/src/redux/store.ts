import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import book from './book/reducer';

export const rootReducer = combineReducers({ book });
const middlewares = [applyMiddleware(thunk)];
if (__DEV__) {
  // @ts-ignore
  middlewares.push(Reactotron.createEnhancer!());
}
export default createStore(rootReducer, compose(...middlewares));
