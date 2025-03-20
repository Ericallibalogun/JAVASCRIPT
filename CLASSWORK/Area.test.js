const {calculateArea, convertToFahrenheit,isEven,isLeapYear,countVowels} = require ("./Area.js");

test("calculate area of rectangle", () => {
	let firstNumber = 29;
	let secondNumber = 23;
	const result = calculateArea(firstNumber,secondNumber);
	expect(result).toBe(667);

})
test("convert celsius to fahrenheit", () =>{
	let celsius = 26;
	const result =  convertToFahrenheit(celsius);
	expect(result).toBe(878.8);

})
test("validate number", () => {
	let number = 24;
	const result = isEven(number);
	expect(result).toBe("True");
})
test("validate a leap year", () => {
	let number = 2024;
	const result = isLeapYear(number);
	expect(result).toBe("True");
})
test("check for vowel", () => {
	let string = "Hello";
	const result = countVowels(string);
	expect(result).toBe(2);
})