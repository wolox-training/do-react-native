import { Book } from '@interfaces/book';

import { ActionsType } from './action';

interface State {
  books: Book[];
}
const initialState = { books: [] };

interface GetBooks {
  type: ActionsType.GET_BOOKS;
  payload: Book[];
}
type Action = GetBooks;

const book = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionsType.GET_BOOKS:
      return { ...state, book: action.payload };
    default:
      return state;
  }
};

export default book;
