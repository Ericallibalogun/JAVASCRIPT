
const returnValues = function (students) {
    let theValues = [];
    students.forEach(student => {
      let values = student.name + " " + student.age ;
      theValues.push(values);
    })
    return theValues;

}
module.exports = {returnValues};