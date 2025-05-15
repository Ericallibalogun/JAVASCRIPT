const {planSchedule } = require("../TaskFive");

test("plan schedule",() => {
    const timings = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM"]
    const expected = planSchedule(timings);
    const result = planSchedule(timings);
    expect(result).toEqual(expected)
})