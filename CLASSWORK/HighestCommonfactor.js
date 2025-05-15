function gcd(firstNumber, lastNumber) {
    while(lastNumber !== 0){
        let temp = lastNumber;
        lastNumber = firstNumber % lastNumber;
        firstNumber = temp
    }
    return firstNumber;
}
const findHCF = function (number) {
    if(number.length === 0) return null;
    let result = number[0];
    for(let count = 1;count < number.length; count++) {
        result = gcd(result, number[count]);
        if(result === 1) return 1;
    }
    return result;

}
let numbers = [10,15,25];
let hcf = findHCF(numbers);
console.log(`The HCF of the array is: ${hcf}`);


module.exports = {findHCF}