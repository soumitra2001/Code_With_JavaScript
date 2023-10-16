// Singleton
// Object.create

// Object literals
const mySym = Symbol("key")
// console.log(mySym.description);
// console.log(typeof mySym);

const jsUser = {
    name: "Supriya",
    age: 22,
    [mySym]: "myKey",
    email: "sg@google.com",
    "user location": "Bangalore",
    isLoggedIn: true,
    lastLogginDays: ["Sunday", "Friday"]
}

// console.log(jsUser.age);
// console.log(jsUser["age"]);

// console.log(jsUser.user location);  // In this case we can not access it using dot(.) operator

// console.log(jsUser["user location"]);

// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)  // for make the object unchangable

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}

// console.log(jsUser.greeting);

jsUser.greeting();
jsUser.greetTwo();