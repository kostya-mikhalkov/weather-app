import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import clearSky from '../../../img/png/clear-sky.png';
import drizzle from '../../../img/png/drizzle.png';
import fog from '../../../img/png/fog.png';
import partyCloudy from '../../../img/png/cloud.png';
import rainShowers from '../../../img/png/rainShowers.png';
import rain from '../../../img/png/rain.png';
import snow from '../../../img/png/snow.png';
import thunder from '../../../img/png/thunderstorm.png';
import nav from '../../../img/svg/navigation.svg';

interface hourlyForecastInterface {
    time: string;
    weatherDescr: string;
    temp: number;
    windDirection: number;
    windSpeed: number;
}

const HourlyForecastElements: React.FC<hourlyForecastInterface> = ({time, weatherDescr, temp, windDirection, windSpeed}) => {
    const toggleState = useSelector((state: RootState) => state.weather.toggle);

    const realTime = new Date(time);
    const min = realTime.getMinutes() === 0 ? "00" : realTime.getMinutes();
    const hour = realTime.getHours() === 0 ? "00" : realTime.getHours();

    const myStyle: React.CSSProperties = {
        transform: `rotate(${windDirection}deg)`
    }
    
    return (
        <div className={toggleState ? "hourlyForecast__elements dark" : "hourlyForecast__elements light"}>
          <span className="hourlyForecast__elements__time">{hour}:{min}</span>
          <div className="hourlyForecast__elements__weather">
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
                    className="hourlyForecast__elements__weather__img" />
                <span className="hourlyForecast__elements__weather__temp">{Math.floor(temp) + '°C'}</span>
          </div>
          <div className="hourlyForecast__elements__nav">
            <img src={nav} 
                 alt="navigation"
                 style={myStyle} 
                 className="hourlyForecast__elements__nav__img"/>
            <span className="hourlyForecast__elements__nav__speed">{windSpeed} km/h</span>    
          </div>    
        </div>
    )
}  

export default HourlyForecastElements;