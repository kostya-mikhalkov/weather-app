import City from "../interface/cityInterface";

const getCityCoordinates = async () => {
    const url: string = 'https://data-api.oxilor.com/rest/countries?key=wS7FR70XO3cVdQpZiOS4yYjDZz7WiR&lng=en';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const updateData: City[] = data.map((city: any) => {
            return {
                name: city.name,
                latitude: city.latitude,
                longitude: city.longitude
            }
        });
        return updateData;

    } catch(error) {
        console.error(error)
    }
}

export default getCityCoordinates;