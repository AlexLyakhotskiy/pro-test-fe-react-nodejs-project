import { createSlice } from '@reduxjs/toolkit';
import { getTests } from './tests-operation';

const initialState = {
  item: null,
  error: null,
  loading: false,
};

const testSlice = createSlice({
  name: 'tests',
  initialState,
  extraReducers: {
    [getTests.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [getTests.fulfilled](state, { payload }) {
      state.item = payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [getTests.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default testSlice.reducer;
