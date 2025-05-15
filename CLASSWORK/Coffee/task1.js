
const sumArray = function(arrayOfNumbers){
    let sumArrayNumbers = 0
    for (let arrayOfNumber of arrayOfNumbers) {
        sumArrayNumbers += arrayOfNumber;
    }
    return sumArrayNumbers;

}

module.exports = {sumArray};
