const{returnValues} = require('../task2');

test("return the values in an object", ()=>{
    const arrayOfObjects = [
        {name:'John',age:25},
        {name:'Bola',age:45},
        {name:'Mary',age:13}
    ]
    const expected = [ 'John 25', 'Bola 45', 'Mary 13' ]
    const result = returnValues(arrayOfObjects);
    expect(result).toEqual(expected);

})