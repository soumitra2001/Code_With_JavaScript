
function greet(){
    console.log("Hello and Welcome");
}

// greet()

function addTwoNumber(num1, num2){
    let result = num1 + num2
    return result
}

// console.log(addTwoNumber(2,4));

function sayHello(username){
    if(!username){
        return "Please provide username!"
    }
    return `Hello ${username} welcome, have a nice day..!`
}

// console.log((sayHello()));
// console.log((sayHello("Supriya")));

function calculateCartPrice(val1, val2, ...nums){
    console.log(`val1: ${val1}, val2: ${val2}`);
    return nums;
}

// console.log(calculateCartPrice(921));
// console.log(calculateCartPrice(921,21));
// console.log(calculateCartPrice(921, 700, 200, 100, 900));

const user = {
    userName: "Supriya",
    profession: "Software Engineer"
}

function handleObject(anyObject){
    return `Username is ${anyObject.userName} and user profession is ${anyObject.profession}`
}

// console.log(handleObject(user));

console.log(handleObject({
    userName: "Hello",
    profession: "Java Developer"
}));

