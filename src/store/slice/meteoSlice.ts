import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MeteoInitialInterface {
    currentTemperature: string;
    feelsLikeTemperature: string;
    sunrise: string;
    sunset: string;
    humidity: string;
    windSpeed: string;
    pressure: string;
    uvIndex: string;
    weatherDescription: string;
    temperatureForecast: number[];
    dateForecast: string[];
    weatherCodeForecats: string[];
}

const initialState: MeteoInitialInterface = {
    currentTemperature: '',
    feelsLikeTemperature: '',
    sunrise: '',
    sunset: '',
    humidity: '',
    windSpeed: '',
    pressure: '',
    uvIndex: '',
    weatherDescription: '',
    temperatureForecast: [],
    dateForecast: [],
    weatherCodeForecats: []
}

const meteoSlice = createSlice({
    name: 'meteo',
    initialState,
    reducers: {
        addWeatherData: (state, action: PayloadAction<MeteoInitialInterface>) => {
            state.currentTemperature = action.payload.currentTemperature;
            state.feelsLikeTemperature = action.payload.feelsLikeTemperature;
            state.sunrise = action.payload.sunrise;
            state.sunset = action.payload.sunset;
            state.humidity = action.payload.humidity;
            state.windSpeed = action.payload.windSpeed;
            state.pressure = action.payload.pressure;
            state.uvIndex = action.payload.uvIndex;
            state.weatherDescription = action.payload.weatherDescription;
            state.temperatureForecast = action.payload.temperatureForecast.slice(1);
            state.dateForecast = action.payload.dateForecast.slice(1);
            state.weatherCodeForecats = action.payload.weatherCodeForecats.slice(1);
        }
    }
});

export const { addWeatherData } = meteoSlice.actions;
export default meteoSlice.reducer;