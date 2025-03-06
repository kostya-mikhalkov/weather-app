import React from "react";
import HourlyForecastElements from "./HourlyForecastElements/HourlyForecastElements";

import './HourlyForecast.css';

const HourlyForecast: React.FC = () => {
    return (
        <div className="hourlyForecast">
            <h3 className="hourlyForecast__title">Hourly Forecast:</h3>
            <div className="hourlyForecast__wrapper">
              <HourlyForecastElements time="2025-03-05T15:00"/>
            </div>
        </div>
    )
}

export default HourlyForecast;