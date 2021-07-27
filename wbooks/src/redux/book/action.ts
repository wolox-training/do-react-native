import { BOOKS_MOCK } from '@constants/mockBooks';

export enum ActionsType {
  GET_BOOKS = 'GET_BOOKS'
}

const actionCreators = {
  getBooks: () => {
    return { type: ActionsType.GET_BOOKS, payload: BOOKS_MOCK };
  }
};

export default actionCreators;
