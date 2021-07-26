import { createStore, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';

import book from './book/reducer';

const rootReducer = combineReducers({ book });

export const store = createStore(rootReducer, Reactotron.createEnhancer!());
