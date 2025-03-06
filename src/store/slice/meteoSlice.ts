import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { indexOfTimeVariables } from "../../utils/findTimeIndex";

interface MeteoInitialInterface {
    currentTemperature: string;
    currentTime: string;
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
    hourlyTemperature: string[];
    hourlyTime: string[];
    hourlyWeatherCode: string[];
    hourlyWindDirection: number[];
    hourlyWindSpeed: number[];
}

const initialState: MeteoInitialInterface = {
    currentTemperature: '',
    currentTime: '',
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
    weatherCodeForecats: [],
    hourlyTemperature: [],
    hourlyTime: [],
    hourlyWeatherCode: [],
    hourlyWindDirection: [],
    hourlyWindSpeed: []
}

const meteoSlice = createSlice({
    name: 'meteo',
    initialState,
    reducers: {
        addWeatherData: (state, action: PayloadAction<MeteoInitialInterface>) => {
            state.currentTemperature = action.payload.currentTemperature;
            state.currentTime = action.payload.currentTime;
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
            state.hourlyTemperature = action.payload.hourlyTemperature.slice(indexOfTimeVariables + 1, indexOfTimeVariables + 6);
            state.hourlyTime = action.payload.hourlyTime.slice(indexOfTimeVariables + 1, indexOfTimeVariables + 6);
            state.hourlyWeatherCode = action.payload.hourlyWeatherCode.slice(indexOfTimeVariables + 1, indexOfTimeVariables + 6);
            state.hourlyWindDirection = action.payload.hourlyWindDirection.slice(indexOfTimeVariables + 1, indexOfTimeVariables + 6);
            state.hourlyWindSpeed = action.payload.hourlyWindSpeed.slice(indexOfTimeVariables + 1, indexOfTimeVariables + 6);
        }
    }
});

export const { addWeatherData } = meteoSlice.actions;
export default meteoSlice.reducer;