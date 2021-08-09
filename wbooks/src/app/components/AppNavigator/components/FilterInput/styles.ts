import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderRadius: 100,
    height: 28
  },
  image: {
    width: 13,
    height: 12,
    marginVertical: 8,
    marginLeft: 8
  },
  input: { flex: 1 }
});
