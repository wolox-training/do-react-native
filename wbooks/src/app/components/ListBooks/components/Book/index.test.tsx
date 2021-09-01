import React from 'react';
import { render } from '@testing-library/react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';

import Book from './index';

describe('Testing Book', () => {
  test(' charged correctly data', () => {
    const { queryByText, getByRole } = render(<Book book={BOOKS_MOCK[0]} />);
    const title = queryByText(BOOKS_MOCK[0].title);
    const author = queryByText(BOOKS_MOCK[0].author);
    const touch = getByRole('button');
    expect(touch).toBeTruthy();
    expect(title).toBeTruthy();
    expect(title?.props.children).toBe(BOOKS_MOCK[0].title);
    expect(author).toBeTruthy();
    expect(author?.props.children).toBe(BOOKS_MOCK[0].author);
  });
});
