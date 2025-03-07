import { changeLoadingOpenMeteo } from "../store/slice/appSlice";
import timeFormattedAPI from "../utils/timeFortmattedAPI";
import { addWeatherData } from "../store/slice/meteoSlice";
import { AppDispatch } from "../store/store";
import weatherCodeHelper from "../utils/weatherCodeHelper";
import findTimeIndex from "../utils/findTimeIndex";

const openMeteo = async (lat: number, lon: number, dispatch: AppDispatch) => {
    dispatch(changeLoadingOpenMeteo(true));
    const url: string = "https://api.open-meteo.com/v1/forecast";
    const params = {
        latitude: lat.toString(),
        longitude: lon.toString(),
        current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,pressure_msl,uv_index,weathercode",
        daily: "temperature_2m_max,sunrise,sunset,weathercode",
        timezone: "auto",
        forecast_days: "6",
        hourly: "temperature_2m,weathercode,wind_direction_10m,wind_speed_10m",
    };

    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;

    try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error("Ошибка при запросе к API");
        }

        const data = await response.json();
        console.log(data)
        findTimeIndex(timeFormattedAPI(data.current.time), data.hourly.time);
        const weather = {
            currentTemperature: Math.floor(data.current.temperature_2m) + data.current_units.temperature_2m,
            currentTime: timeFormattedAPI(data.current.time),
            feelsLikeTemperature: Math.floor(data.current.apparent_temperature) + data.current_units.apparent_temperature,
            sunrise: data.daily.sunrise[0],
            sunset: data.daily.sunset[0],
            humidity: data.current.relative_humidity_2m + data.current_units.relative_humidity_2m,
            windSpeed: data.current.wind_speed_10m + data.current_units.wind_speed_10m,
            pressure: data.current.pressure_msl + data.current_units.pressure_msl,
            uvIndex: data.current.uv_index + data.current_units.uv_index,
            weatherDescription: weatherCodeHelper(data.current.weathercode),
            temperatureForecast: data.daily.temperature_2m_max,
            dateForecast: data.daily.time,
            weatherCodeForecats: data.daily.weathercode.map((item: number) => weatherCodeHelper(item)),
            hourlyTemperature: data.hourly.temperature_2m,
            hourlyTime: data.hourly.time,
            hourlyWeatherCode: data.hourly.weathercode.map((item: number) => weatherCodeHelper(item)),
            hourlyWindDirection: data.hourly.wind_direction_10m,
            hourlyWindSpeed: data.hourly.wind_speed_10m
        }
        dispatch(addWeatherData(weather));
        dispatch(changeLoadingOpenMeteo(false));
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export default openMeteo;