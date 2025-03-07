import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import HourlyForecastElements from "./HourlyForecastElements/HourlyForecastElements";
import spinner from '../../img/gif/spinnerOpenMeteo.gif';

import './HourlyForecast.css';

const HourlyForecast: React.FC = () => {
    const meteoState = useSelector((state: RootState) => state.meteo);
    const toggleState = useSelector((state: RootState) => state.weather.toggle);
    const loading = useSelector((state: RootState) => state.weather.loadingOpenMeteo)

    const hours = [0, 1, 2, 3, 4];

    return (
        <div className={toggleState ? "hourlyForecast active_colorLight" : "hourlyForecast"}>
            {!loading ? <>
                            <h3 className="hourlyForecast__title">Hourly Forecast:</h3>
                            <div className="hourlyForecast__wrapper">
                            {hours.map((item, ind) => (
                            <HourlyForecastElements key={ind}
                                                    time={meteoState.hourlyTime[item]} 
                                                    weatherDescr={meteoState.hourlyWeatherCode[item]} 
                                                    temp={+meteoState.hourlyTemperature[item]}
                                                    windDirection={meteoState.hourlyWindDirection[item]}
                                                    windSpeed={meteoState.hourlyWindSpeed[item]}/>
                            ))}
                            </div>
                       </> : <img src={spinner} alt="spinner" className="spinnerOpenMeteo"/>}
        </div>
    )
}

export default HourlyForecast;