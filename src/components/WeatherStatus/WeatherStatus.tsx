import React from "react";
import clearSky from '../../img/png/clear-sky.png';
import drizzle from '../../img/png/drizzle.png';
import fog from '../../img/png/fog.png';
import partyCloudy from '../../img/png/cloud.png';
import rainShowers from '../../img/png/rainShowers.png';
import rain from '../../img/png/rain.png';
import snow from '../../img/png/snow.png';
import thunder from '../../img/png/thunderstorm.png';

interface weatherProps {
    weatherDescr: string
}

const WeatherStatus: React.FC<weatherProps> = ({weatherDescr}) => {
    return (
        <div className="city-weather__middle-wrapper">
            <img 
                src={
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
                className="city-weather__middle-wrapper-img" 
            />
            <h6 className="city-weather__middle-wrapper-title">{weatherDescr}</h6>
        </div>
    )
};


export default WeatherStatus;