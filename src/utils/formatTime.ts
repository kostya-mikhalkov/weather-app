function formatTime(isoString: string): string {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();

    return `${hours}:${minutesStr} ${ampm}`;
}

export default formatTime;
