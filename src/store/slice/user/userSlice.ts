import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userInitialState} from './initialState';
import {UserInfo} from 'services/application/user/type';

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action?.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
