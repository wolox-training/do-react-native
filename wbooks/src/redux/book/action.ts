import { Book } from '@interfaces/book';

export enum ActionsType {
  GET_BOOKS = 'GET_BOOKS'
}

const ActionCreators = {
  getBooks: (newBooks: Book[]) => {
    return { type: ActionsType.GET_BOOKS, payload: newBooks };
  }
};

export default ActionCreators;
