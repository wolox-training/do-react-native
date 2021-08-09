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
  },
  tabLabel: {
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 11.78,
    letterSpacing: 0.12
  },
  filterInput: {
    flex: 1
    // height: '100%'
  }
});
