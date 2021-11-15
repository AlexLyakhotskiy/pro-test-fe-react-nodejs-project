import { createSlice } from '@reduxjs/toolkit';

import {  } from './auth-operations';

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
