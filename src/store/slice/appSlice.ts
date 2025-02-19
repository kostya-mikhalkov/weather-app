import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import City from '../../interface/cityInterface';

interface AppState {
    toggle: boolean;
    city: City[];
    cityName: string;
    cityNameApp: string;
    loading: boolean;
    latitude: number | null;
    longitude: number | null;
    cityNotFound: boolean;
    time: string;
    time_zone: string;
}

const initialState: AppState = {
    toggle: false,
    city: [],
    cityName: '',
    cityNameApp: '',
    loading: false,
    latitude: null,
    longitude: null,
    cityNotFound: false,
    time: '',
    time_zone: ''
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
        },
        changeLatitude: (state, action: PayloadAction<number>) => {
            state.latitude = action.payload;
        },
        changeLongitude: (state, action: PayloadAction<number>) => {
            state.longitude = action.payload;
        },
        changeCityNotFound: (state, action: PayloadAction<boolean>) => {
            state.cityNotFound = action.payload;
        },
        changeCityTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload;
        },
        changeCityTimeZone: (state, action: PayloadAction<string>) => {
            state.time_zone = action.payload;
        },
        addCityNameApp: (state, action: PayloadAction<string>) => {
            state.cityNameApp = action.payload;
        }
    }
})

export const { 
    toggleChange, 
    cityCoordinates, 
    addCityName, 
    changeLoading, 
    changeLatitude, 
    changeLongitude, 
    changeCityNotFound, 
    changeCityTime, 
    changeCityTimeZone,
    addCityNameApp 
} = appSlice.actions;
export default appSlice.reducer;
