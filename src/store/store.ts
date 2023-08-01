import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';
import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  debug: true,
};

const logger = createLogger({});

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, compose(applyMiddleware(thunk, logger)));

export const persistor = persistStore(store);

export default store;
