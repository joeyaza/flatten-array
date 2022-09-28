const flattenArray = (arr) => {

    if (isNotArray(arr)) {

        throw new Error("Input is not an array");

    }

    return [].concat(...arr);

}

const isNotArray = (arr) => {

    return !Array.isArray(arr);

}

module.exports = flattenArray;