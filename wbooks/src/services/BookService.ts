import { BOOKS_MOCK } from '@constants/mockBooks';

const BookService = {
  getBooks: () => Promise.resolve({ ok: true, data: BOOKS_MOCK, problem: 'Fail' })
};

export default BookService;
