import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';

const HEIGHT_IMAGE = 90;
const WIDTH_IMAGE = 55;

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
    elevation: 3
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
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.tundora
  },
  author: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 3,
    color: COLORS.tundora
  }
});
