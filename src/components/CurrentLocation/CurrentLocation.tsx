import React from "react";
import { useDispatch } from "react-redux";
import location from '../../img/svg/location.svg';
import getLocationByIP from "../../api/getLocationByIP";
import Location from "../../interface/locationInterface";
import { changeLatitude, changeLongitude } from "../../store/slice/appSlice";
import { motion } from "framer-motion";
import './CurrentLocation.css';

const CurrentLocation: React.FC = () => {
    const dispatch = useDispatch();

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

    return (
        <motion.div className="location"
                    onClick={handleGetCurrentLocation}
                    whileTap={{ scale: 0.95 }}>
            <img className="location-img" src={location} alt="location" />
            <h6 className="location-title">Current Location</h6>
        </motion.div>
    )
}

export default CurrentLocation;
