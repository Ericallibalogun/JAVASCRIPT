const {returnUsersAbove80} = require('../task8');
const {getKeysAndValues} = require("../task7");
test("return score above 80 ",() => {
    const value = {
        user1: { name: "Tom", scores: { math: 70, english: 80 } },
        user2: { name: "Jerry", scores: { math: 90, english: 60 } },
        user3: { name: "Spike", scores: { math: 85, english: 88 } }
    };
    const expected = getKeysAndValues(value);
    const result = getKeysAndValues(value);
    expect(result).toEqual(expected);
})