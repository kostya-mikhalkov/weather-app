export let indexOfTimeVariables: number;
const findTimeIndex = (time: string, arr: string[]): void => {
    indexOfTimeVariables = arr.indexOf(time);
}

export default findTimeIndex;