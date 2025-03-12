const person = {
	firstName: "Eric",
	lastName: "Alli-balogun"
};
	

function getfullName(object){
Object.values(person);

for(let values in person){
process.stdout.write(person[values] + " ")  
};
}
getfullName(person);
