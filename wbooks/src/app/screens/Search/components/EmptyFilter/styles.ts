import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.black,
    lineHeight: 17.67,
    letterSpacing: -0.36,
    marginBottom: 12
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: COLORS.tundora,
    lineHeight: 17.67,
    letterSpacing: -0.24
  }
});
