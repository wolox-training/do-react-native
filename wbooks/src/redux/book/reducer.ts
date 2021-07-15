import { Book } from '@interfaces/book';

import { ActionsType } from './action';

interface State {
  books: Book[];
}
const initialState = { books: [] };

interface GetBooks {
  type: ActionsType.GET_BOOKS;
}
type Action = GetBooks;

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
