import { createSlice } from '@reduxjs/toolkit';
import testOperations from './tests-operation';

const initialState = {
  tests: null,
  isLoading: false,
  error: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  extraReducers: {
    [testOperations.getTests.pending](state, { payload }) {
      state.isLoading = true;
    },
    [testOperations.getTests.fulfilled](state, { payload }) {
      state.items = payload.tests;

      state.isLoading = false;
      state.isLogIn = true;
    },
    [testOperations.getTests.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default testSlice.reducer;
