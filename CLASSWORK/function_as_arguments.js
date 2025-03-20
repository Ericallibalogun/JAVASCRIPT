//let firstNumber = 5;
//let secondNumber = 10;

function calculate(firstValue,secondValue, callBackFunction){
	return callBackFunction(firstValue,secondValue);
};
function addTwoNumbers(numberOne,numberTwo){
	let result = numberOne + numberTwo;
	return result;
};
function subtractTwoNumbers(numberOne,numberTwo){
	let result = numberOne - numberTwo;
	return result;
};
function multiplyTwoNumbers(numberOne,numberTwo){
	let result = numberOne * numberTwo;
	return result;
};
function getEvenNumbers(array){
	let evenArray = [];
	for(let number of array){
	if(number % 2 == 0){
	evenArray .push(number)
	}
}
return evenArray;	
};

function getOddNumbers(array){
	let oddArray = [];
	for(let number of array){
	if(number % 2 != 0){
	oddArray .push(number)
	}
}
return oddArray;	
};







module.exports = {calculate,addTwoNumbers,subtractTwoNumbers,multiplyTwoNumbers,getEvenNumbers,getOddNumbers}