import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetTest } from '../../utils/apiServices';

const getTests = createAsyncThunk(
  '/tests/:nameTest',

  async (nameTest, { rejectWithValue }) => {
    try {
      const allTests = await apiGetTest(nameTest);
      console.log(allTests);
      return Array.isArray(allTests);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const testOperations = {
  getTests,
};

export default testOperations;
