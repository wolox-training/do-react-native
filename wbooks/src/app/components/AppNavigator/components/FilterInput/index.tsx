import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import BookAction from '@redux/book/action';
import { State } from '@interfaces/state';
import icSearch from '@assets/ic_search.png';

import styles from './styles';
import icClear from './assets/cancel.png';

function FilterInput() {
  const dispatch = useDispatch();
  const filterSearch = useSelector<State, string>(state => state.book.filterSearch);
  const handleChangesText = (text: string) => dispatch(BookAction.filterBooks(text));
  const handleClearFilter = () => dispatch(BookAction.filterBooks(''));
  const disabledClearButton = filterSearch === '';
  return (
    <View style={styles.container}>
      <Image source={icSearch} style={styles.imageSearch} resizeMode="contain" />
      <TextInput value={filterSearch} onChangeText={handleChangesText} style={styles.input} />
      <TouchableOpacity onPress={handleClearFilter} disabled={disabledClearButton}>
        <Image
          source={icClear}
          style={[styles.imageClear, !disabledClearButton && styles.activeClearButtn]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
export default FilterInput;
