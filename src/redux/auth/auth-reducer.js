import { createSlice } from '@reduxjs/toolkit';

import { signUp, signIn, logout } from './auth-operations';

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [signUp.fulfilled](state, { payload }) {
      state.user = payload.user.name;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [signUp.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },

    [signIn.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [signIn.fulfilled](state, { payload }) {
      state.user = payload.user.name;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [signIn.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload;
    },

    [logout.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [logout.rejected](state, { payload }) {
      state.user = null;
      state.token = null;
      state.error = payload;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
