import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import BookAction from '@redux/book/action';
import icSearchPlaceholder from '@assets/ic_search_placeholder.png';

import styles from './styles';

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
      <Image source={icSearchPlaceholder} style={styles.imageSearch} />
      <TextInput value={bookFilter} onChangeText={text => setBookFilter(text)} style={styles.input} />
      <TouchableOpacity onPress={handleClearFilter} disabled={disabledClearButton} style={styles.clearTouch}>
        <Image
          source={icSearchPlaceholder}
          resizeMode="contain"
          style={[styles.imageClear, !disabledClearButton && styles.activeClearButtn]}
        />
      </TouchableOpacity>
    </View>
  );
}
export default FilterInput;
