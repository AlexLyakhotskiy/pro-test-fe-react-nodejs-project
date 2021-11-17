import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-reducer';
import { testReducer } from './tests/tests-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigAuth, authReducer),
    tests: testReducer,
  },

  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
