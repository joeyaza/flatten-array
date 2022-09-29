const flattenArray = (arr) => {

    if (!isArray(arr)) {

        throw new Error("Input is not an array");

    }

    return flatten(arr);

}

const flatten = (arr) => {

    return arr.reduce((accum, el) => {

        return accum.concat(isArray(el) ? flatten(el) : el);

      }, []);

}

const isArray = (arr) => {

    return Array.isArray(arr);

}

module.exports = flattenArray;