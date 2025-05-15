const student = {
    name:"John Doe",
    age:22,
    courses:["Math","Physics","Computer Science"],
    address:{
        city:"New York",
        zip:10001,
    }
}


function getObjectName(){
   const{name} = student;

    return name;

}
function getObjectCourse(){
    const{courses} = student;
    for(let elements in courses){
        subject = courses[1];
    }
    return subject;
}
 

console.log("The student's name is: " + getObjectName());
console.log("The second course is: " + getObjectCourse())
console.log("The zip code from the address is: " + student.address.zip);
