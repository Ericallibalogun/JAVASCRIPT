function calculateArea(height,width){
	let area =  height * width
	return area;
};
function convertToFahrenheit(celsius){
	let fahrenheit = celsius * 33.8
	return fahrenheit;
};
function isEven(number){
	if(number % 2 === 0){
	return "True";	
	}else return "False";
};
function isLeapYear(year){
	if(year % 4 == 0){
	return "True";
	}else return "False";
};
function countVowels(string){
	let counter = 0;
	for(let count = 0;count < string.length;count ++){
	if(string.charAt(count) == "a" || string.charAt(count) == "e" || string.charAt(count) == "i" || string.charAt(count) == "o" || string.charAt(count) == "u"   ){
	counter++
	
	}
    }
return counter;
};





module.exports = {calculateArea, convertToFahrenheit,isEven,isLeapYear,countVowels}