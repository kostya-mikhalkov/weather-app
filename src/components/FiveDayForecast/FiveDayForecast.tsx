import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FiveDayForecastElements from './FiveDayForecastElemts/FiveDayForecastElements';
import spinner from '../../img/gif/spinnerOpenMeteo.gif';

import './FiveDayForecast.css'

const FiveDayForecast: React.FC = () => {
    const meteoState = useSelector((state: RootState) => state.meteo);
    const toggleState = useSelector((state: RootState) => state.weather.toggle);
    const loading = useSelector((state: RootState) => state.weather.loadingOpenMeteo);

    return (
        <div className={!toggleState ? "forecast" : "forecast active-color"}>
            {!loading ? <>
                            <h3 className="forecast-title">5 Days Forecast:</h3>
                            <ul className="forecast-list">
                            <FiveDayForecastElements key={0} weatherDescr={meteoState.weatherCodeForecats[0]} temperature={meteoState.temperatureForecast[0]} date={meteoState.dateForecast[0]}/>
                            <FiveDayForecastElements key={1} weatherDescr={meteoState.weatherCodeForecats[1]} temperature={meteoState.temperatureForecast[1]} date={meteoState.dateForecast[1]}/>
                            <FiveDayForecastElements key={2} weatherDescr={meteoState.weatherCodeForecats[2]} temperature={meteoState.temperatureForecast[2]} date={meteoState.dateForecast[2]}/>
                            <FiveDayForecastElements key={3} weatherDescr={meteoState.weatherCodeForecats[3]} temperature={meteoState.temperatureForecast[3]} date={meteoState.dateForecast[3]}/>
                            <FiveDayForecastElements key={4} weatherDescr={meteoState.weatherCodeForecats[4]} temperature={meteoState.temperatureForecast[4]} date={meteoState.dateForecast[4]}/>
                            </ul>
                        </> : <img src={spinner} alt="spinner" className="spinnerOpenMeteo"/>}
        </div>
    )
}

export default FiveDayForecast;