import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';
import SIZES from '@constants/sizes';

const HEIGHT_IMAGE = 60;
const WIDTH_IMAGE = 40;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: COLORS.codGray,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
    marginBottom: 10
  },
  image: {
    height: HEIGHT_IMAGE,
    width: WIDTH_IMAGE
  },
  containerText: {
    marginLeft: 15,
    flex: 1
  },
  title: {
    fontSize: SIZES.TITLE,
    fontWeight: 'bold',
    color: COLORS.tundora
  },
  author: {
    fontSize: SIZES.REGULAR,
    fontWeight: '500',
    marginTop: 3,
    color: COLORS.tundora
  }
});
