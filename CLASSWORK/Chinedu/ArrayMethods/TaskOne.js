const testScores = [23,45,65,76,90,34,45,13,87,68]


const filterScores = function(scores) {
    return scores.filter(score => score >= 70)

};
console.log(filterScores(testScores));


module.exports = {filterScores}