// const animal ={
//     name: "Animal",
//     age: "",
//     species:"",
//     color:"",
//     sound:function (){
//         console.log("Animal can make sound");
//     }
// }
//
// let cat = Object.create(animal)
//
// cat.name = "Quayyum";
// cat.age = "24";
// cat.species = "Mammals";
// cat.color = "black";
// console.log(cat)
// cat.sound()
//
//
// let dog = Object.create(animal)
// dog.name = "Dog";
// dog.age = "24";
// dog.species = "Mammals";
// dog.color = "black";
// console.log(dog)
//
// let monkey = {}
// Object.setPrototypeOf(animal, monkey)
// monkey.name = "Monkey";
// monkey.age = "24";
// monkey.species = "Mammals";
// monkey.sound =function (){
//     console.log("whoop");
// console.log(monkey)}
// monkey.sound()

function Person (name, age){
    this.name = name;
    this.age = age;

    this.getProfile = function(){
        return `${this.name} ${this.age}`;
    }
}const personOne = new Person("John", 12);
console.log(personOne.getProfile());
