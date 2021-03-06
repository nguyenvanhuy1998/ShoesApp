import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {},
});
export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
