import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import '../CityClock/CityClock.css';

const CityClock: React.FC = () => {
    const [hours, setHours] = useState<number>(0);
    const[minutes, setMinutes] = useState<number>(0);
    const[seconds, setSeconds] = useState<number>(0);
    const[data, setData] = useState('');
    const cityName = useSelector((state: RootState) => state.weather.cityNameApp);
    const cityTime = useSelector((state: RootState) => state.weather.time);
    const toggleState = useSelector((state: RootState) => state.weather.toggle);

    useEffect(() => {
        const time = new Date(cityTime);
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
        setHours(time.getHours());
        setMinutes(time.getMinutes());
        setSeconds(time.getSeconds());
        setData(time.toLocaleDateString('en-US', options))
    }, [cityTime]);

    useEffect(() => {
        const clock = setInterval(() => {
            setSeconds(seconds => {
                if (seconds === 59) {
                    setMinutes(minutes => {
                        if (minutes === 59) {
                            setHours((hours + 1) % 24);
                            return 0
                        } else {
                            return minutes + 1
                        }
                    });
                    return 0
                } else {
                   return seconds + 1;
                }
            })
        }, 1000)
        return () => clearInterval(clock);
    }, [hours, minutes, seconds]);

    const formatTime = (value: number) => {
       return value.toString().padStart(2, '0');
    }

    return (
        <div className={!toggleState ? "city-clock" : "city-clock color-light"}>
            <h3 className="city-clock_title">{cityName}</h3>
            <div className="city-clock_clock">{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</div>
            <p className="city-clock_date">{data}</p>
        </div>
    )
};

export default CityClock;