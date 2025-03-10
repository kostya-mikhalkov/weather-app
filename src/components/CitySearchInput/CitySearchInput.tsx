import {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { motion } from "motion/react";
import openMeteo from "../../api/openMeteo";
import City from '../../interface/cityInterface';
import { addCityName, changeLatitude, changeLongitude, changeCityNotFound } from "../../store/slice/appSlice";
import searchIcon from '../../img/svg/search.svg';
import spinner from '../../img/gif/spinner.gif';

import './CitySearchInput.css';

const CitySearchInput = (): JSX.Element => {
    const [state, setState] = useState('');
    const [openSearchWindow, setOpenSearchWindow] = useState(false);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const stateCityAPI = useSelector((state: RootState) => state.weather.city);
    const cityNameState = useSelector((state: RootState) => state.weather.cityName);
    const latitude = useSelector((state: RootState) => state.weather.latitude);
    const longitude = useSelector((state: RootState) => state.weather.longitude);
    const cityNotFoundState = useSelector((state: RootState) => state.weather.cityNotFound);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addCityName(state));
        if (state === '') dispatch(changeCityNotFound(false));
    }, [dispatch, state]);

    useEffect(() => {
            if (stateCityAPI.length === 0) {
                dispatch(changeCityNotFound(true));
            } else {
                const allNull = stateCityAPI.every((item: City | null) => !item);
                dispatch(changeCityNotFound(allNull));
            }
    }, [dispatch, stateCityAPI]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
        setOpenSearchWindow(true);
    };

    const handleCityClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        dispatch(changeLatitude(Number(e.currentTarget.getAttribute('data-lat'))));
        dispatch(changeLongitude(Number(e.currentTarget.getAttribute('data-lon'))));
        setState(e.currentTarget.outerText);
        setOpenSearchWindow(false);
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (latitude !== null && longitude !== null) {
            openMeteo(latitude, longitude, dispatch)
        }
    }

    return ( 
        <div className="search-container">
            <form className="search-input-wrapper"
                onSubmit={submitForm}>
                <input type="text"
                    placeholder="Search for your preffered city..."
                    value={cityNameState}
                    onChange={(e) => handleInputChange(e)}/>
                <button className="search-btn" type="submit">
                    <img src={searchIcon} alt="search" />
                </button>
                {cityNotFoundState && state ? <motion.div className="city-not-found"
                                                initial={{opacity: 0, y: -200}}
                                                animate={{opacity: 1, y: -35}}>
                                                {state} city not found.
                                    </motion.div> : null}
                {loading && <img src={spinner} className="spinner" alt="spinner"/>}
            </form>
            {state && stateCityAPI && openSearchWindow && (
                <ul className="city-list">
                    {stateCityAPI
                        .filter((item: City) => item)
                        .map((item: City, ind) => {
                            return (
                                <motion.li key={item.id}
                                    className="city-list_item"
                                    data-lat={item.latitude}
                                    data-lon={item.longitude}
                                    onClick={(e) => handleCityClick(e)}
                                    initial={{opacity: 0, x: -100}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{ delay: ind * 0.2 }}>
                                    {item.name}
                                </motion.li>
                            )
                        })}
                </ul>
            )}
        </div>
    )
}

export default CitySearchInput;