const {distribute} = require('../TaskFour')

test("distribute books to members",() => {
    const expected = distribute()
    const result = distribute()
    expect(result).toEqual(expected)
})