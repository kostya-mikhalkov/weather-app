import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

import './CitySearchInput.css';

const CitySearchInput = (): JSX.Element => {
    return (
        <form className="search-input-wrapper">
            <input type="text" 
                    />
        </form>
    )
}

export default CitySearchInput;