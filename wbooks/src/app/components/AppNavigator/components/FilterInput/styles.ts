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
    marginRight: 13,
    tintColor: COLORS.manatee
  },
  input: {
    flex: 1,
    marginVertical: 6
  },
  imageClear: {
    tintColor: COLORS.iron,
    width: 14,
    height: 14,
    right: 8,
    marginVertical: 8
  },
  activeClearButtn: { tintColor: COLORS.monza }
});
