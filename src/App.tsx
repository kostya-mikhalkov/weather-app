import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import CitySearchInput from './components/CitySearchInput/CitySearchInput';
import fetchCoordinates from './utils/fetchHelper';
import { cityCoordinates } from './store/slice/appSlice';
import { RootState } from './store/store';
import './App.css';

function App() {
  const stateCity = useSelector((state: RootState) => state.weather.city);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (stateCity.length === 0) {
        const data = await fetchCoordinates();
        if (data !== undefined) dispatch(cityCoordinates(data))
      }
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <ToggleTheme />
      <CitySearchInput />
    </div>
  );
}

export default App;
