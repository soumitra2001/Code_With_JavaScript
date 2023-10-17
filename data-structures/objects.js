// Singleton
// Object.create

// Object literals
const mySym = Symbol("key")
console.log(mySym.description);
console.log(typeof mySym);

const jsUser = {
    name: "Supriya",
    age: 22,
    [mySym]: "myKey",
    email: "sg@google.com",
    "user location": "Bangalore",
    isLoggedIn: true,
    lastLogginDays: ["Sunday", "Friday"]
}

console.log(jsUser.age);
console.log(jsUser["age"]);

// console.log(jsUser.user location);  // In this case we can not access it using dot(.) operator

console.log(jsUser["user location"]);

console.log(typeof jsUser[mySym]);

Object.freeze(jsUser)  // for make the object unchangable

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(jsUser.greeting);

jsUser.greeting();
jsUser.greetTwo();

const obj1 = {1:"a", 2:"s", 3:"e"}
const obj2 = {4:"b", 5:"c", 6:"u"}

const obj3 = Object.assign(obj1, obj2) // Syntex is Object.assign(target,sources), source can be many
const obj4 = Object.assign({}, obj1, obj2)

const obj5 = {...obj1, ...obj2}
console.log(obj3,"\n",obj4,"\n",obj5);

// Destructure of an Object

const course = {
    courseName: "Js Master",
    fees: 300,
    instructor: "Supriya"
}

const {instructor: teacher} = course  // Object destructure
console.log(teacher);

let arr2 = [1,4,4,7]
const {3:idx} = arr2  // Array destructure
console.log(idx);

// JSON
// {
//     "name": "Supriya",
//     "age": 22,
//     "email": "sg@ghorai.com"
// }