import React from "react";
import clearSky from '../../../img/png/clear-sky.png';
import drizzle from '../../../img/png/drizzle.png';
import fog from '../../../img/png/fog.png';
import partyCloudy from '../../../img/png/cloud.png';
import rainShowers from '../../../img/png/rainShowers.png';
import rain from '../../../img/png/rain.png';
import snow from '../../../img/png/snow.png';
import thunder from '../../../img/png/thunderstorm.png';

interface forecastType {
    weatherDescr: string;
    temperature: number;
    date: string;
}

const FiveDayForecastElements: React.FC<forecastType> = ({weatherDescr, temperature, date}) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "short"
    }
    const formatData = new Date(date).toLocaleDateString('en-US', options);

    return (
        <li className="forecast-list-item">
            <img src={
                    weatherDescr === "Clear Sky" ? clearSky :
                    weatherDescr === "Partly cloudy" ? partyCloudy :
                    weatherDescr === "Fog" ? fog :
                    weatherDescr === "Drizzle" ? drizzle :
                    weatherDescr === "Rain" ? rain :
                    weatherDescr === "Snow" ? snow :
                    weatherDescr === "Rain showers" ? rainShowers :
                    weatherDescr === "Thunderstorm" ? thunder : ''
                } 
                alt={weatherDescr}
                className="forecast-list-item-img" />
            <span className="forecast-list-item-temp">{Math.floor(temperature) + '°C'}</span>
            <span className="forecast-list-item-date">{formatData}</span>
        </li>
    )
}

export default FiveDayForecastElements;