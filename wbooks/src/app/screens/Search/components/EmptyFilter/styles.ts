import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';
import SIZES from '@constants/sizes';

const SIZE_50 = 50;
const LINE_HEIGHT = 17.67;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 88
  },
  image: {
    width: SIZE_50,
    height: SIZE_50,
    marginBottom: 20,
    tintColor: COLORS.tundora
  },
  title: {
    fontSize: SIZES.REGULAR,
    fontWeight: 'bold',
    color: COLORS.black,
    lineHeight: LINE_HEIGHT,
    letterSpacing: -0.36,
    marginBottom: 12
  },
  subTitle: {
    fontSize: SIZES.REGULAR,
    fontWeight: 'normal',
    color: COLORS.tundora,
    lineHeight: LINE_HEIGHT,
    letterSpacing: -0.24
  }
});
