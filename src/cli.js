export const getRandomInt = (min, max, except = null) => {
    let result = 0;
    if (except.includes(result = Math.floor(Math.random() * (max + 1 - min) + min))) {
        result = getRandomInt(min, max, except);
    };
    return result;
}