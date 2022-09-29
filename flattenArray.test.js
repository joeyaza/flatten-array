const flattenArray = require('./flattenArray');

describe("flattenArray", () => {


    describe("when flattenArray function is called with non array", () => {

        it("should error", () => {
    
            expect(() => {
                flattenArray(2)
              }).toThrow("Input array is faulty");
    
        });
    
    
    });

    describe("when flattenArray function is called with nested array", () => {

        it("should return flattened array", () => {

            console.log(flattenArray([1, [2, [3, 4]]]));
    
            expect(flattenArray([1, [2, 3, 4]])).toEqual([1, 2, 3, 4]);
    
        });
    
    });

});


