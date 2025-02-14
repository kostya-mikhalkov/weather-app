const cityNameHelper = (str: string): string => {
    const arr: string[] = str.split(',');
    return arr[0].trim();
}

export default cityNameHelper;