import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';

const SIZE_SEARCH = 12;
const SIZE_CLEAR = 14;

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderRadius: 100,
    height: 28,
    marginBottom: 20,
    padding: 8
  },
  imageSearch: {
    width: SIZE_SEARCH,
    height: SIZE_SEARCH,
    marginRight: 13,
    tintColor: COLORS.manatee
  },
  input: {
    flex: 1,
    height: 40,
    bottom: 12,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 16,
    letterSpacing: -0.15
  },
  imageClear: {
    tintColor: COLORS.iron,
    width: SIZE_CLEAR,
    height: SIZE_CLEAR
  },
  activeClearButtn: { tintColor: COLORS.monza }
});
