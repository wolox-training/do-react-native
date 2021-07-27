import React /* ,{ useEffect } */ from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { /* useDispatch,*/ useSelector } from 'react-redux';
import { Book as BookInterface } from '@interfaces/book';
// import bookAction from '@redux/book/action';
import { State } from '@redux/store';

import Book from './components/Book';
import styles from './styles';

function Library() {
  // const dispatch = useDispatch();
  const books = useSelector((state: State) => state.book.books);
  /* useEffect(() => {
    dispatch(bookAction.getBooks);
  }, [dispatch]);*/
  const renderItem: ListRenderItem<BookInterface> = ({ item }) => <Book book={item} />;
  const keyExtractor = (item: BookInterface) => item.id.toString();
  return (
    <SafeAreaView style={styles.containerView}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
}
export default Library;
