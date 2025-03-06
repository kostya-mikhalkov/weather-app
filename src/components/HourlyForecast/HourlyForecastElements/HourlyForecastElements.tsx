import React from "react";
import clearSky from '../../../img/png/clear-sky.png';
import drizzle from '../../../img/png/drizzle.png';
import fog from '../../../img/png/fog.png';
import partyCloudy from '../../../img/png/cloud.png';
import rainShowers from '../../../img/png/rainShowers.png';
import rain from '../../../img/png/rain.png';
import snow from '../../../img/png/snow.png';
import thunder from '../../../img/png/thunderstorm.png';

interface hourlyForecastInterface {
    time: string;
}

const HourlyForecastElements: React.FC<hourlyForecastInterface> = ({time}) => {
    const realTime = new Date(time);
    const min = realTime.getMinutes() === 0 ? "00" : realTime.getMinutes();
    const hour = realTime.getHours() === 0 ? "00" : realTime.getHours();
    
    return (
        <div className="hourlyForecastElements">
          <span className="hourlyForecastElements__time">{hour}:{min}</span>
        </div>
    )
}  

export default HourlyForecastElements;