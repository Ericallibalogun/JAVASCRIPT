const car = {
	make:'Toyota',
	model:'Camry',
	year:2021
};

function getKeysValues(object){
Object.entries(car);
console.log(Object.entries(car));
	for(let subItems of Object.entries(car)){
		for(let car of subItems){
			console.log(car);
	}
	}





};
getKeysValues(car)