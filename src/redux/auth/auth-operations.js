import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  apiRegisterUser,
  apiLoginUser,
  apiLogoutUser,
} from '../../utils/apiServices';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue }) => {
    try {
      await apiRegisterUser(user);
      const data = await apiLoginUser(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (user, { rejectWithValue }) => {
    try {
      return await apiLoginUser(user);
    } catch (error) {
      console.dir(error);
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await apiLogoutUser();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
