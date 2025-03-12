const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25


};
function getFullDetails(object){
const{firstName} = person;
process.stdout.write('"' + "First Name:" + firstName + ", ");
const{lastName} = person;
process.stdout.write("Last Name:" + lastName + ", ");
const{age} = person;
process.stdout.write("Age:" + age + '"');
	
}
getFullDetails(person);

