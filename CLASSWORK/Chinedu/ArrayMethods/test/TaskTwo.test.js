const {increaseScores} = require ("../TaskTwo")

test("add 5 to scores", () => {
    const grades = [85,92,78,88,95];
    const expected = [ 90, 97, 83, 93, 100 ]
    const result = increaseScores(grades);
    expect(result).toEqual(expected);
})