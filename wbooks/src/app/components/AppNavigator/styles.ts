import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';

export default StyleSheet.create({
  headerImageBar: {
    width: '100%',
    backgroundColor: COLORS.polar,
    height: '100%'
  },
  headerTitle: {
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: -0.41
  },
  headerBar: {
    height: 115
  },
  alignItemHeader: {
    marginHorizontal: 13,
    marginBottom: 20
  }
});
