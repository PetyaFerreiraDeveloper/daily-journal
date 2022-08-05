export const capitalizeFirstLetter = (text) => {
    let first = text.charAt(0).toUpperCase();
    let rest = text.slice(1);
    let result = first + rest;

    return result;
}
