import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggle: false
}

const appSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        toggleChange: (state) => {
            state.toggle = !state.toggle;
        }
    }
})

export const {toggleChange} = appSlice.actions;
export default appSlice.reducer;