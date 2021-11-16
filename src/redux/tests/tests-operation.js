import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetTest } from '../../utils/apiServices';

const getTests = createAsyncThunk(
  '/tests',

  async (nameTest, { rejectWithValue }) => {
    try {
      const allTests = await apiGetTest(nameTest);
      console.log(allTests.data.tests);
      return allTests.data.tests;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const testOperations = {
  getTests,
};

export default testOperations;
