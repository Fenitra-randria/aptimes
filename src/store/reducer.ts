import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import appReducer from './slice/app/appSlice';
import userReducer from './slice/user/userSlice';
import {appInitialStateType} from 'store/slice/app/type';
import {UserInitialStateType} from 'store/slice/user/type';

const appReducers = combineReducers({
  log: (_, action) => {
    return {};
  },
  appReducer,
  userReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    const appReducer = state.appReducer;

    AsyncStorage.clear();
    state = {appReducer};
  }
  return appReducers(state, action);
};

export type rootState = {
  appReducer: appInitialStateType;
  userReducer: UserInitialStateType;
};

export default rootReducer;
