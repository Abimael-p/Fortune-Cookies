export const getRandomNumber = (number) => {
    const Random = Math.random();
    const roundedRandom = Math.round(Random * number);

    return roundedRandom;
};