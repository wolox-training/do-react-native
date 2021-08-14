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
    marginBottom: 20
  },
  imageSearch: {
    width: SIZE_SEARCH,
    height: SIZE_SEARCH,
    marginVertical: 8,
    marginLeft: 8,
    marginRight: 13,
    tintColor: COLORS.manatee
  },
  input: {
    flex: 1,
    paddingVertical: 6,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 16,
    letterSpacing: -0.15
  },
  imageClear: {
    tintColor: COLORS.iron,
    width: SIZE_CLEAR,
    height: SIZE_CLEAR,
    right: 8,
    marginVertical: 8
  },
  activeClearButtn: { tintColor: COLORS.monza }
});
