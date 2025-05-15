
const destructureObject = function(person) {
    naming = person.name;
    aging = person.age;
    cited = person.city;

    destructed = naming + " is " + aging + " years and lives in " +  cited;

 return destructed;
}
//console.log(destructureObject(person));

module.exports = {destructureObject};