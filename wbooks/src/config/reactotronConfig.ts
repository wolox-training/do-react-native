import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import tronsauce from 'reactotron-apisauce';

if (__DEV__) {
  Reactotron.configure({ name: 'wbooks' }).setAsyncStorageHandler!(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .use(tronsauce())
    .connect();
}
export default Reactotron;
