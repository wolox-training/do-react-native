import { createStore, combineReducers } from 'redux';
import Reactotron from '@config/reactotronConfig';

import book from './book/reducer';

export const rootReducer = combineReducers({ book });

export const store = createStore(rootReducer, Reactotron.createEnhancer!());
