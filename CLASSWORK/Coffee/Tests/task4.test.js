const {destructureObject} = require('../task4');

test("destructure keys in object", () => {
    const person =  {name: 'John', age: 32,city:"London",country:"United States"};
    const expected = "John is 32 years and lives in London";
    const result = destructureObject(person);
    expect(result).toEqual(expected);
})