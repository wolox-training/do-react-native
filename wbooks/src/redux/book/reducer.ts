import { Book } from '@interfaces/book';

import { ActionsType } from './action';

interface State {
  books: Book[];
  isLoading: boolean;
  errorMessage: string;
}
export const initialState = { books: [], isLoading: false, errorMessage: '' };

interface GetBooks {
  type: ActionsType.GET_BOOKS;
}
interface GetBooksSuccess {
  type: ActionsType.GET_BOOKS_SUCCESS;
  payload: Book[];
}
interface GetBooksFailure {
  type: ActionsType.GET_BOOKS_FAILURE;
  payload: string;
}
type Action = GetBooks | GetBooksSuccess | GetBooksFailure;

const book = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionsType.GET_BOOKS:
      return { ...state, isLoading: true };
    case ActionsType.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, isLoading: false };
    case ActionsType.GET_BOOKS_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default book;
