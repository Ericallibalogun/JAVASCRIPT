const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25


};
function getFullDetails(object){
const{firstName,lastName,age} = person;
console.log(`"First Name: ${firstName}, last Name: ${lastName}, Age: ${age}"`);
}
getFullDetails(person);

