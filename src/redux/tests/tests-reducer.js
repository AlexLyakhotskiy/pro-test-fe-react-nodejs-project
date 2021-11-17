import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: null,
};

const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    addResult(state, action) {
      return (state = action.payload);
    },
  },
});
export const testAction = testSlice.actions;
export const testReducer = testSlice.reducer;
