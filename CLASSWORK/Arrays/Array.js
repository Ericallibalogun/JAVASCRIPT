
function addTwoToEachElements(numbers) {
    const newArray = []
    numbers.forEach((number) =>{
        let result = number + 2
        newArray.push(result)
    })
    return newArray;
}
function getEvenNumbers(numbers) {
    const newArray = []
    numbers.forEach((number) =>{
        if (number % 2 === 0) {
            newArray.push(number)
        }
    })
    return newArray;
}
function getOddNumbers(array) {
    return array.filter((number) => (number % 2 !== 0));
}
module.exports = {addTwoToEachElements,getEvenNumbers,getOddNumbers};