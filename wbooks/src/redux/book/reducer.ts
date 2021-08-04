import { createReducer, completeReducer, completeState } from 'redux-recompose';
import { Book } from '@interfaces/book';

import { actions } from './action';

interface State {
  books: Book[];
  booksLoading: boolean;
  booksError: string | null;
}

export const initialState: State = completeState({
  description: {
    books: []
  }
});
const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));
