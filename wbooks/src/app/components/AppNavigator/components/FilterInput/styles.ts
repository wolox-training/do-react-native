import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderRadius: 100,
    height: 28,
    marginBottom: 31
  },
  imageSearch: {
    width: 13,
    height: 12,
    marginVertical: 8,
    marginLeft: 8,
    marginRight: 13
  },
  input: {
    flex: 1,
    marginVertical: 6
  },
  clearTouch: {
    right: 8,
    height: '100%'
  },
  imageClear: {
    width: 13,
    height: 12,
    backgroundColor: COLORS.iron
  },
  activeClearButtn: { backgroundColor: COLORS.monza }
});
