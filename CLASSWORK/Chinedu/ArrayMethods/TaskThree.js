const integers = [2,4,6,8,10]

const findSquaresOfNumber = function (number) {
    return integers.map(integer => integer * integer)
}
console.log(findSquaresOfNumber(integers));

module.exports = {findSquaresOfNumber}