const student = {
    name:"John Doe",
    age:22,
    courses:["Math","Physics","Computer Science"],
    address:{
        city:"New York",
        zip:10001,
    }
}


function getObjectName() {
    const {name} = student;

    return name;

}
student.age = 23;
student.GPA = 3.8;
function getDetails() {
    return getObjectName() + " is " + student.age + " years old and has a GPA of " + student.GPA;

}

console.log(getDetails());

