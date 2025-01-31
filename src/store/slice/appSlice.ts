import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import City from '../../interface/cityInterface';

interface AppState {
    toggle: boolean;
    city: City[];
    cityName: string;
    loading: boolean;
}

const initialState: AppState = {
    toggle: false,
    city: [],
    cityName: '',
    loading: false
}

const appSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        toggleChange: (state) => {
            state.toggle = !state.toggle;
        },
        cityCoordinates: (state, action: PayloadAction<City[]>) => {
            state.city = action.payload;
        },
        addCityName: (state, action: PayloadAction<string>) => {
            state.cityName = action.payload;
        },
        changeLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
})

export const { toggleChange, cityCoordinates, addCityName, changeLoading } = appSlice.actions;
export default appSlice.reducer;
