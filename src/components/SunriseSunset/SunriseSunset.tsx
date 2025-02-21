import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import formatTime from '../../utils/formatTime';
import sunriseWhite from '../../img/svg/sunrise-white.svg';
import sunriseBlack from '../../img/svg/sunrise-black.svg';
import sunsetWhite from '../../img/svg/sunset-white.svg';
import sunsetBlack from '../../img/svg/sunset-black.svg';

interface SunriseSunsetProps {
    sunriseOrSunset: 'sunrise' | 'sunset';
    time: string;
}

const SunriseSunset: React.FC<SunriseSunsetProps> = ({sunriseOrSunset, time})  => {
    const toggleState = useSelector((state: RootState) => state.weather.toggle);

    return (
        <div className="city-weather__left-sunriseSunset-elem">
            <img src={toggleState ? sunriseOrSunset === 'sunrise' ? sunriseWhite : sunsetWhite : sunriseOrSunset === 'sunrise' ? sunriseBlack : sunsetBlack} alt="sunrise" />
            <div className="city-weather__left-sunriseSunset-elem-descr">
                <h6 className="city-weather__left-sunriseSunset-elem-descr-title">{sunriseOrSunset.charAt(0).toUpperCase() + sunriseOrSunset.slice(1)}</h6>
                <span className="city-weather__left-sunriseSunset-elem-descr-time">{formatTime(time)}</span>
            </div>
        </div>
    )
} 

export default SunriseSunset;