const getLocationByIP = async () => {
    const API_KEY = "de7bf72bc56d498ca531772ffe76f1a0";
        try {
            const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`Error ${response.status}`)
            }
            const data = await response.json();
            return {
                latitude: data.latitude,
                longitude: data.longitude,
            }
        } catch (error) {
            throw new Error('eror')
        }
}

export default getLocationByIP;