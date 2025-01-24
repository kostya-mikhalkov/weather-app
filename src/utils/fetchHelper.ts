import getCityCoordinates from "../api/getCityCoordinates";

const fetchCoordinates = async () => {
    const coordinates = await getCityCoordinates();
    return coordinates;
};

export default fetchCoordinates;