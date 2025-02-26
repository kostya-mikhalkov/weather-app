import React from "react";
import { useSelector } from "react-redux";
import SunriseSunset from "../SunriseSunset/SunriseSunset";
import WeatherStatus from "../WeatherStatus/WeatherStatus";
import WeatherParameters from "../WeatherParameters/WeatherParameters";
import { RootState } from "../../store/store";
import './CityWeatherDetails.css';

const CityWeatherDetails: React.FC = () => {
    const meteoObj = useSelector((state: RootState) => state.meteo);
    const toggleState = useSelector((state: RootState) => state.weather.toggle);

    return (
        <div className={!toggleState ? "city-weather" : "city-weather color-light"}>
            <div className="city-weather__left">
                <div className="city-weather__left-temp">
                    <h4 className="city-weather__left-temp-title">{meteoObj.currentTemperature}</h4>
                    <p className="city-weather__left-temp-feelsLike">Feels like: <span>{meteoObj.feelsLikeTemperature}</span></p>
                </div>
                <div className="city-weather__left-sunriseSunset">
                    <SunriseSunset sunriseOrSunset="sunrise" time={meteoObj.sunrise}/>
                    <SunriseSunset sunriseOrSunset="sunset" time={meteoObj.sunset}/>
                </div>
            </div>
            <div className="city-weather__middle">
                <WeatherStatus weatherDescr={meteoObj.weatherDescription}/>
            </div>
            <div className="city-weather__right">
                <WeatherParameters />
            </div>
        </div>
    )
}

export default CityWeatherDetails;