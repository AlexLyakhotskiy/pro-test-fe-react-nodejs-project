import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetTests } from '../../utils/apiServices';

export const getTests = createAsyncThunk(
  '/tests',
  async (nameTest, { rejectWithValue }) => {
    try {
      const allTests = await apiGetTests(nameTest);
      return allTests;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
