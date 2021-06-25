import { StyleSheet } from 'react-native';
import color from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: color.shadow,
    backgroundColor: color.white,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  imagen: {
    flex: 1,
    marginVertical: 15
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
    fontWeight: '500'
  }
});
