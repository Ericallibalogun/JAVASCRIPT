const{sumArray} = require('../task1')

test("add elents in the array", ()=>{
    const array = [1,2,3,4,5];
    const expected = 15;
    const result = sumArray(array);
    expect(result).toBe(expected);
})