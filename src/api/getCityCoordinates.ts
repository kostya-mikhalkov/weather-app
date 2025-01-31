import City from "../interface/cityInterface";

const getCityCoordinates = async (cityName: string) => {
    const apiKey = 'pk.ff2a4033f0cd2ae9e3035c5d6136c1f3'; 
    const url: string = `https://api.locationiq.com/v1/search.php?key=${apiKey}&q=${cityName}&format=json&accept-language=en`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const updateData: City[] = data.map((city: any) => {
            if (city.class === 'boundary' && city.type === 'administrative') {
                return {
                    id: city.place_id,
                    name: city.display_name,
                    latitude: city.lat,
                    longitude: city.lon
                }
            }
        });
        return updateData;

    } catch(error) {
        console.error(error)
    }
}

export default getCityCoordinates;