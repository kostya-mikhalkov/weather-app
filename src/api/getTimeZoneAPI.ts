const getTimeZone = async (latitude: number, longitude: number) => {
    const API_KEY = 'KPJLIQ0P5P8O';
    try {
        const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${latitude}&lng=${longitude}`);
        if (!response.ok) {
            throw new Error (`Eroor ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch(error) {
        throw new Error('eror')
    }
}

export default getTimeZone;