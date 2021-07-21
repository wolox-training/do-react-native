import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure({ name: 'wbooks' })
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux());

if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}
