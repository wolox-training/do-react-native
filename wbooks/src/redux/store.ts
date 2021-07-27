import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import book from './book/reducer';

export const rootReducer = combineReducers({ book });
const middleware = applyMiddleware(thunk);
export default createStore(rootReducer, compose(middleware, Reactotron.createEnhancer!()));
