const {filterScores} = require ("../TaskOne")

test("filter the student's scores",() => {
    const testScores = [23,45,65,76,90,34,45,13,87,68]
    const result = filterScores(testScores);
    const expected = filterScores(testScores);
    expect(result).toEqual(expected);
})