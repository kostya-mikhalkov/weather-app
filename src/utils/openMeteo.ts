import { changeLoading } from "../store/slice/appSlice";
import { AppDispatch } from "../store/store";

const openMeteo = async (lat: number, lon: number, dispatch: AppDispatch) => {
    dispatch(changeLoading(true));
    const url: string = "https://api.open-meteo.com/v1/forecast";
    const params = {
        latitude: lat.toString(),
        longitude: lon.toString(),
        current: "temperature_2m,relative_humidity_2m,rain",
        hourly: "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,rain,wind_speed_10m,wind_speed_80m,soil_temperature_0cm,soil_temperature_6cm",
        daily: "temperature_2m_max,temperature_2m_min",
    };

    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;

    try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error("Ошибка при запросе к API");
        }

        const data = await response.json();
        console.log(data);

        const currentTemperature = data.current.temperature_2m;
        console.log("Текущая температура:", currentTemperature);
        dispatch(changeLoading(false));
        return data; 
    } catch (error) {
        console.error("Ошибка:", error);
        throw error;
    }
};

export default openMeteo;