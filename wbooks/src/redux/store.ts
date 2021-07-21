import { createStore } from 'redux';
import Reactotron from 'reactotron-react-native';

import reducer from './book/reducer';

export const store = createStore(reducer, Reactotron.createEnhancer!());
