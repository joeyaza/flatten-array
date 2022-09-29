const flattenArray = (arr) => {

    try {

        return arr.reduce((accum, el) => {

            return accum.concat(isArray(el) ? flattenArray(el) : el);
    
          }, []);


    } catch {

        throw new Error("Input array is faulty");

    }


}

const isArray = (arr) => {

    return Array.isArray(arr);

}

module.exports = flattenArray;