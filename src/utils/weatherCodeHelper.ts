const weatherCodeHelper = (code: number): string => {
    let weatherDescr;
    switch(code) {
        case 0:
            weatherDescr = "Clear Sky";
            break;
        case 1:
        case 2:
        case 3:
            weatherDescr = "Partly cloudy";
            break;
        case 45:
        case 48:
            weatherDescr = "Fog";
            break;
        case 51:
        case 53:
        case 55:
            weatherDescr = "Drizzle";
            break;
        case 61:
        case 63:
        case 65:
            weatherDescr = "Rain";
            break;
        case 71:
        case 73:
        case 75:
            weatherDescr = "Snow";
            break;
        case 80:
        case 81:
        case 82:
            weatherDescr = "Rain showers";
            break;
        case 95:
            weatherDescr = "Thunderstorm";
            break;
        default:
            weatherDescr = "Unknown weather condition";
    }
    return weatherDescr;
}

export default weatherCodeHelper;