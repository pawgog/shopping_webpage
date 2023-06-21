import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducer';

export const store = configureStore({
  reducer: {
    cartStore: cartSlice
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
