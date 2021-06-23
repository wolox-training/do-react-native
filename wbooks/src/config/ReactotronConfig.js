import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.configure({ name: 'wbooks' }).setAsyncStorageHandler(AsyncStorage).useReactNative().connect();
