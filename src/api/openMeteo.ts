import { changeLoading } from "../store/slice/appSlice";
import { addWeatherData } from "../store/slice/meteoSlice";
import { AppDispatch } from "../store/store";
import weatherCodeHelper from "../utils/weatherCodeHelper";

const openMeteo = async (lat: number, lon: number, dispatch: AppDispatch) => {
    dispatch(changeLoading(true));
    const url: string = "https://api.open-meteo.com/v1/forecast";
    const params = {
        latitude: lat.toString(),
        longitude: lon.toString(),
        current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,pressure_msl,uv_index,weathercode",
        daily: "temperature_2m_max,sunrise,sunset,weathercode",
        timezone: "auto",
        forecast_days: "6",
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
        const weather = {
            currentTemperature: Math.floor(data.current.temperature_2m) + data.current_units.temperature_2m,
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
                weatherCodeForecats: data.daily.weathercode.map((item: number) => weatherCodeHelper(item))
        }
        dispatch(addWeatherData(weather));
        dispatch(changeLoading(false));
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export default openMeteo;