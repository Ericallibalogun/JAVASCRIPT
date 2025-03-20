 const {calculate,addTwoNumbers,subtractTwoNumbers,multiplyTwoNumbers,getEvenNumbers,getOddNumbers} = require("./function_as_arguments.js");

test("add two numbers", () =>{
	let firstNumber = 5;
	let secondNumber = 72;   //arrange
	const result = addTwoNumbers(firstNumber,secondNumber);  //Act
	expect(result).toBe(77) //Assert

})

test("subtract two numbers",() =>{
	let firstNumber = 10;
	let secondNumber = 50;
	const result = subtractTwoNumbers(firstNumber,secondNumber);
	expect(result).toBe(-40);

})

test("multiply two numbers",() =>{
	let firstNumber = 34;
	let secondNumber = 10;
	const result = multiplyTwoNumbers(firstNumber,secondNumber);
	expect(result).toBe(340);

})

test("return even numbers",() =>{
	let arrayOfNumbers = [2,3,4,5,6,7,9];
	let answer = [2,4,6];
	const result = getEvenNumbers(arrayOfNumbers);
	expect(result).toEqual(answer);
})

test("return odd numbers",() =>{
	let arrayOfNumbers = [2,3,4,5,6,7,9];
	let answer = [3,5,7,9];
	const result = getOddNumbers(arrayOfNumbers);
	expect(result).toEqual(answer);
})