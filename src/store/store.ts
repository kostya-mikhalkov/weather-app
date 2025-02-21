import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slice/appSlice';
import meteoSlice from './slice/meteoSlice';

const store = configureStore({
  reducer: {
    weather: appSlice,
    meteo: meteoSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;