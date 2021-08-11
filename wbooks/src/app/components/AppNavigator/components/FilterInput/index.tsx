import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import BookAction from '@redux/book/action';
import icSearch from '@assets/ic_search.png';

import styles from './styles';
import icClear from './assets/close.png';

function FilterInput() {
  const dispatch = useDispatch();
  const [bookFilter, setBookFilter] = useState('');
  useEffect(() => {
    dispatch(BookAction.filterBooks(bookFilter));
  }, [dispatch, bookFilter]);
  const handleClearFilter = () => {
    setBookFilter('');
  };
  const disabledClearButton = bookFilter === '';
  return (
    <View style={styles.container}>
      <Image source={icSearch} style={styles.imageSearch} />
      <TextInput value={bookFilter} onChangeText={text => setBookFilter(text)} style={styles.input} />
      <TouchableOpacity onPress={handleClearFilter} disabled={disabledClearButton}>
        <Image
          source={icClear}
          style={[styles.imageClear, !disabledClearButton && styles.activeClearButtn]}
        />
      </TouchableOpacity>
    </View>
  );
}
export default FilterInput;
