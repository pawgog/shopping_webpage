import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducer';

export const store = configureStore({
  reducer: {
    productsStore: productsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
