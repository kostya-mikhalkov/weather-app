import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import City from '../../interface/cityInterface';

interface AppState {
    toggle: boolean;
    city: City[];
}

const initialState: AppState = {
    toggle: false,
    city: []
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
        }
    }
})

export const { toggleChange, cityCoordinates } = appSlice.actions;
export default appSlice.reducer;
