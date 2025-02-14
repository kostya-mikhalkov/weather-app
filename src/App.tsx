import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import CitySearchInput from './components/CitySearchInput/CitySearchInput';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import fetchCoordinates from './utils/fetchHelper';
import { cityCoordinates } from './store/slice/appSlice';
import getLocationByIP from './api/getLocationByIP';
import openMeteo from './utils/openMeteo';
import getTimeZone from './api/getTimeZoneAPI';
import Location from './interface/locationInterface';
import { changeLoading, changeLatitude, changeLongitude, changeCityTime, changeCityTimeZone, addCityName } from './store/slice/appSlice';
import { RootState } from './store/store';
import './App.css';

const App: React.FC = () => {
  const cityNameState = useSelector((state: RootState) => state.weather.cityName);
  const longitude = useSelector((state: RootState) => state.weather.longitude);
  const latitude = useSelector((state: RootState) => state.weather.latitude);
  const timeCity = useSelector((state: RootState) => state.weather.time);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetCurrentLocation = async () => {
      try {
        const result: Location | undefined = await getLocationByIP();
        if (result?.latitude && result?.longitude) {
            dispatch(changeLatitude(+result.latitude));
            dispatch(changeLongitude(+result.longitude));
        }
      } catch (error) {
          console.error('Error fetching location:', error);
      }
    }
    handleGetCurrentLocation();
  }, [])

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
        openMeteo(latitude, longitude, dispatch);
        const getRealTimeAndTimeZone = async () => {
          try {
            const result = await getTimeZone(latitude, longitude);
            dispatch(changeCityTime(result.formatted));
            dispatch(changeCityTimeZone(result.zoneName));
            if (cityNameState === '') dispatch(addCityName(result.cityName))
          } catch (error) {
            console.log(error)
          }
        }
        getRealTimeAndTimeZone();
    }
  }, [latitude, longitude]);


  useEffect(() => {
    if (cityNameState !== '') {
      dispatch(changeLoading(true))
    }
    const timer = setTimeout(() => {
      if (cityNameState) {
        fetchCoordinates(cityNameState).then((data) => {
          if (data !== undefined) dispatch(cityCoordinates(data));
        });
      }
      dispatch(changeLoading(false))
    }, 200);
  
    return () => clearTimeout(timer);
  }, [cityNameState]);
  

  return (
    <div className="App">
      <div className="header">
        <ToggleTheme />
        <CitySearchInput />
        <CurrentLocation />
      </div>
    </div>
  );
}

export default App;
