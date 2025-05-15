const {addTwoToEachElements, getEvenNumbers,getOddNumbers} = require("./Array");


test("add two to each elements in the array", ()=>{
    const array = [1,2,3,4,5];//arrange
    const expected = [3,4,5,6,7];
    const result = addTwoToEachElements(array);//act
    expect(result).toEqual(expected);//assert


})
test("test for even numbers", () =>{
    const arrayOfNumbers =[2,4,5,6,7,8];
    const expected = [2,4,6,8];
    const result = getEvenNumbers(arrayOfNumbers);
    expect(result).toEqual(expected);
})
test("test for odd numbers", () =>{
    const arrayOfNumbers = [1,2,3,4,5,6,7,8];
    const expected = [1,3,5,7];
    const result = getOddNumbers(arrayOfNumbers);
    expect(result).toEqual(expected);
})