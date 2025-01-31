import {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import City from '../../interface/cityInterface';
import { addCityName } from "../../store/slice/appSlice";
import searchIcon from '../../img/svg/search.svg';
import spinner from '../../img/gif/spinner.gif';

import './CitySearchInput.css';

const CitySearchInput = (): JSX.Element => {
    const [state, setState] = useState('');
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [openSearchWindow, setOpenSearchWindow] = useState(false);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const stateCityAPI = useSelector((state: RootState) => state.weather.city);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addCityName(state));
    }, [state])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
        setOpenSearchWindow(true);
    };

    const handleCityClick = (e: React.MouseEvent<HTMLLIElement>) => {
        setLatitude(Number(e.currentTarget.getAttribute('data-lat')));
        setLongitude(Number(e.currentTarget.getAttribute('data-lon')));
        setState(e.currentTarget.outerText);
        setOpenSearchWindow(false);
    }

    return (
        <div>
        <form className="search-input-wrapper">
            <input type="text"
                   value={state}
                   onChange={(e) => handleInputChange(e)}/>
            <button className="search-btn" type="submit">
                <img src={searchIcon} alt="search" />
            </button>
            {loading && <img src={spinner} className="spinner"/>}
        </form>
        {state && stateCityAPI && openSearchWindow && (
            <ul className="city-list">
                {stateCityAPI
                    .filter((item: City) => item)
                    .map((item: City) => {
                        return (
                            <li key={item.id}
                                className="city-list_item"
                                data-lat={item.latitude}
                                data-lon={item.longitude}
                                onClick={(e) => handleCityClick(e)}>
                                {item.name}
                            </li>
                        )
                    })}
            </ul>
        )}
        </div>
    )
}

export default CitySearchInput;