let grades = [85,92,78,88,95];

const increaseScores = function(grades) {
    return grades.map(grade => grade + 5);
}
console.log(increaseScores(grades));

module.exports = {increaseScores}