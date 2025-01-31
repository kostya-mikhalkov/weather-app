import getCityCoordinates from "../api/getCityCoordinates";

const fetchCoordinates = async (cityName: string) => {
    const coordinates = await getCityCoordinates(cityName);
    return coordinates;
};

export default fetchCoordinates;