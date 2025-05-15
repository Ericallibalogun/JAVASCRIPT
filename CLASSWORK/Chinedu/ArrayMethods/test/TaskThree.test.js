const {findSquaresOfNumber} = require('../TaskThree');

test("supply the squares of integers",() => {
    const integers = [2,4,6,8,10]
    const expected = [ 4, 16, 36, 64, 100 ]
    const result = findSquaresOfNumber(integers)
    expect(result).toEqual(expected)

})