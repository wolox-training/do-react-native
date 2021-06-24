import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import color from '@constants/colors';

interface Styles {
  container: ViewStyle;
  imagen: ImageStyle;
  containerText: ViewStyle;
  title: TextStyle;
  author: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    height: 90,
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
    height: 60
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: 20
  },
  title: {
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  author: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '600'
  }
});
