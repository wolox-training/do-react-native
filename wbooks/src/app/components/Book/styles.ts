import { StyleSheet } from 'react-native';
import COLORS from '@constants/colors';
import SIZES from '@constants/sizes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: COLORS.shadow,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 3
  },
  imagen: {
    flex: 1,
    height: SIZES.imagenBookLibary.height,
    width: SIZES.imagenBookLibary.width
  },
  containerText: {
    flex: 3,
    marginLeft: 15
  },
  title: {
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  author: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '500',
    marginTop: 3
  }
});
