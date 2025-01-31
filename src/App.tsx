import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import CitySearchInput from './components/CitySearchInput/CitySearchInput';
import fetchCoordinates from './utils/fetchHelper';
import { cityCoordinates } from './store/slice/appSlice';
import { changeLoading } from './store/slice/appSlice';
import { RootState } from './store/store';
import './App.css';

function App() {

  const cityNameState = useSelector((state: RootState) => state.weather.cityName);
  const dispatch = useDispatch();

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
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [cityNameState]);
  

  return (
    <div className="App">
      <div className="header">
        <ToggleTheme />
        <CitySearchInput />
      </div>
    </div>
  );
}

export default App;
