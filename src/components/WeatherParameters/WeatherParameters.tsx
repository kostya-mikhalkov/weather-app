import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import pressureWhite from '../../img/svg/pressure-white.svg';
import pressureBlack from '../../img/svg/pressure-black.svg';
import uvWhite from '../../img/svg/uv-white.svg';
import uvBlack from '../../img/svg/uv-black.svg';
import humidityWhite from '../../img/svg/humidity-white.svg';
import humidityBlack from '../../img/svg/humidity-black.svg';
import windWhite from '../../img/svg/wind-white.svg';
import windBlack from '../../img/svg/wind-black.svg';

interface WeatherMetricProps {
    value: string;
    option: string;
}

const WeatherMetric: React.FC<WeatherMetricProps> = ({value, option}) => {
    const toggleState = useSelector((state:RootState) => state.weather.toggle);
    
    const whiteElement = value === 'Pressure' ? pressureWhite :
                         value === 'UV' ? uvWhite :
                         value === 'Humidity' ? humidityWhite :
                         value === 'Wind speed' ? windWhite : '';

    const blackElement = value === 'Pressure' ? pressureBlack :
                         value === 'UV' ? uvBlack :
                         value === 'Humidity' ? humidityBlack :
                         value === 'Wind speed' ? windBlack : '';
    return (
        <div className="city-weather__right-wrapper-element">
            <img src={toggleState ? whiteElement : blackElement} alt={value} className="city-weather__right-wrapper-element-img" />
            <h6 className="city-weather__right-wrapper-element-subtitle">{option}</h6>
            <span className="city-weather__right-wrapper-element-descr">{value}</span>
        </div>
    )
}

const WeatherParameters: React.FC = () => {
    const meteoState = useSelector((state: RootState) => state.meteo);

    return (
        <div className="city-weather__right-wrapper">
            <WeatherMetric value='Pressure' option={meteoState.pressure}/>
            <WeatherMetric value='UV' option={meteoState.uvIndex}/>
            <WeatherMetric value='Humidity' option={meteoState.humidity}/>
            <WeatherMetric value='Wind speed' option={meteoState.windSpeed}/>
        </div>
    )
};

export default WeatherParameters;