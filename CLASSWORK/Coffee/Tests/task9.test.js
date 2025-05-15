const {createCounter} = require('../task9');

describe('Counters',() => {

    let counter;
    beforeEach(() => {
        counter = createCounter(11);
    });
    test("check incrementing counter", () => {
        expect(counter.increment()).toEqual(12);
    })
    test("check decrementing counter", () => {
        expect(counter.decrement()).toEqual(10);
    })
    test("check the count",() =>{
        expect(counter.getCount()).toEqual(11);
    })
    test("reset the counter", () => {
        expect(counter.reset()).toEqual(0);
    })

})