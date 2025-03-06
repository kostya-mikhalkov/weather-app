const timeFormattedAPI = (time: string): string => {
    const timeSlice: string = time.slice(0, time.length - 2);
    return timeSlice + "00";
}

export default timeFormattedAPI;