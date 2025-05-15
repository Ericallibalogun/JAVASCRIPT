let array = [];  //literal method
array[0] = 1;
array[1] = "eric";
array[2] = true;
array[3] = {name: "eric", age: 20, city: "New York"};
array[4] = [1,2,3,4,5]


console.log(array);


let array2 = new Array(6);
array2[0] = 9;
array2[1] = 1;
array2[2] = 4;
array2[3] = 5;  //if the size is fixed
array2[4] = 8;
array2[5] = 0;
array2[6] = 2;

array2.push(5);
array2.push(4);//when no fixed size
array2.push(2);
array2.push(3);
array2.push(6);
array2.push(7);

console.log(`the array`,array2);
let answer = array2.shift();

let anwer2 = array2.unshift(7);
console.log(`the answer `,answer);
console.log(`second`,anwer2);

console.log(array2.slice(2, 5));

let firstName = "chinedu"
console.log(Array.from(firstName));

let arrayOfNumbers = Array.of(1,2,3,4,5);
console.log(arrayOfNumbers);


let userInput = "07082573315"
let userPhoneNumber = Array.from(userInput)
console.log(`new acct`, userPhoneNumber.slice(1,8))

let arr = [1,2,3,6,5];
console.log(`spliced`, arr.splice(1,3));


