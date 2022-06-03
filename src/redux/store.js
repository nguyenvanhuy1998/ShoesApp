import {configureStore} from '@reduxjs/toolkit';
import {loginReducer} from '../screens/Login/LoginSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
export default store;
