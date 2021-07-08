import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';

export default StyleSheet.create({
  headerImageBar: {
    width: '100%',
    backgroundColor: COLORS.polar,
    flex: 1
  },
  headerIcons: {
    marginHorizontal: 13,
    marginBottom: 20
  },
  headerTitle: {
    fontWeight: 'normal',
    paddingBottom: 20
  },
  headerBar: { height: 115 }
});
