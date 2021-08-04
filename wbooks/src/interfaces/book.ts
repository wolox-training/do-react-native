export interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}

export interface BookState {
  books: Book[];
  booksLoading: boolean;
  booksError: string | null;
}
