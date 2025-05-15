const { filterUnrepeatedWords } = require('../task5');

test("return an array of unrepeated words" ,() =>{
    const input = "i am very happy and am very sad";
    const expected = ['i','happy','and','sad'];
    const result = filterUnrepeatedWords(input);
    expect(result).toEqual(expected);

})