const {getKeysAndValues} = require('../task7');
test("return key and value of object in array",() => {
    const object = {name:"Eric",age: 12,class: "cohort 24"};
    const expected = getKeysAndValues(object);
    const result = getKeysAndValues(object);
    expect(result).toEqual(expected);
})