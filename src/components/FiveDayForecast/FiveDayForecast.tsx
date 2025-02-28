import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FiveDayForecastElements from './FiveDayForecastElemts/FiveDayForecastElements';

import './FiveDayForecast.css'

const FiveDayForecast: React.FC = () => {
    const meteoState = useSelector((state: RootState) => state.meteo);
    return (
        <div className="forecast">
            <h3 className="forecast-title">5 Days Forecast:</h3>
            <ul className="forecast-list">
              <FiveDayForecastElements key={0} weatherDescr={meteoState.weatherCodeForecats[0]} temperature={meteoState.temperatureForecast[0]} date={meteoState.dateForecast[0]}/>
              <FiveDayForecastElements key={1} weatherDescr={meteoState.weatherCodeForecats[1]} temperature={meteoState.temperatureForecast[1]} date={meteoState.dateForecast[1]}/>
              <FiveDayForecastElements key={2} weatherDescr={meteoState.weatherCodeForecats[2]} temperature={meteoState.temperatureForecast[2]} date={meteoState.dateForecast[2]}/>
              <FiveDayForecastElements key={3} weatherDescr={meteoState.weatherCodeForecats[3]} temperature={meteoState.temperatureForecast[3]} date={meteoState.dateForecast[3]}/>
              <FiveDayForecastElements key={4} weatherDescr={meteoState.weatherCodeForecats[4]} temperature={meteoState.temperatureForecast[4]} date={meteoState.dateForecast[4]}/>
            </ul>
        </div>
    )
}

export default FiveDayForecast;