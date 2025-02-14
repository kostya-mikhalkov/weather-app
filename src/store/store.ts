import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slice/appSlice';

const store = configureStore({
  reducer: {
    weather: appSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;