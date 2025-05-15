const person = {
	name : "Emma",
	age: 12
};

person.gender = "male";
console.log(person);

person.age = 102;
console.log(person);

Object.keys(person);
console.log(Object.keys(person));

Object.values(person);
console.log(Object.values(person));



//for(let i in person){
//	console.log(person[i]);
//}

Object.entries(person);
console.log(Object.entries(person));
console.log();

for(let subItems of Object.entries(person)){
	for(let person of subItems){
		process.stdout.write(person +" ");
}
}

console.log();
const people = {
	name: "nedu",
	hobbies:["football","singing"]
}
const{name} = people;
console.log(name + " ");
const {hobbies} = people;


//const promptsync = require('promptsync');
//console.log("PromptSync installed successfully!");




const prompt = require('prompt-sync')();

const n = prompt('How many more times? ');
console.log(`You entered: ${n}`);
console.log("You entered:" + n);


for(let count = 1;count <= 10; count++){
process.stdout.write(count + " ");

};
console.log();


let array = [2,4,5,6,7];

let obj = {
	name: "eric",
	age: 12
}

//for(let element of array){
//console.log(element)

//};

for(let index in array){
console.log(array[index])

};



for(let values in obj){
	process.stdout.write(values + ":" + "");
	console.log( obj[values])
};




//function declaration
let arrays = [1,2,3,4,5,6,7,8]

function getEvenNumbers(numbers){
	for(let number of numbers){
		if(number % 2 == 0){
		console.log(number)
		}
	}

};

getEvenNumbers(arrays);


//function expression
// const getEvenNumbers = function(numbers){}

console.log()
//nested functions
let numberOne = 2;

console.log(outerFunction(numberOne))

function outerFunction(outerNumber){
	let numberTwo = 6;
	function innerFunction(innerNumber){
		let result = outerNumber + innerNumber
		return result;
	}
		return innerFunction(numberTwo)
}

//arrow function

let num1 = 34
let num2 = 89

const getSum = (firstNumber,secondNumber) =>{
	let sum = firstNumber + secondNumber
	return sum;
}

console.log(getSum(num1,num2))

//returned object
let nums1 = 10;
let nums2 = 2;
function createCalculator(numOne,numTwo){
return{
	add: function(){
		return  numOne + numTwo
	},
	subtract: function(){
		return numOne - numTwo
	},
	multiply:function(){
		return numOne * numTwo
		}
	}
}
let answer = createCalculator(nums1,nums2);
console.log(answer.add())
console.log(answer.subtract())
console.log(answer.multiply())





