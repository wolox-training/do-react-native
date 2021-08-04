import { createReducer, completeReducer, completeState } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions } from './action';

export const initialState: BookState = completeState({
  description: {
    books: []
  }
});
const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));
