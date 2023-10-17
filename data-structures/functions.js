
function greet(){
    console.log("Hello and Welcome");
}

// greet()

function addNumber(num1, num2){
    let result = num1 + num2
    return result
}

// console.log(addNumber(2,4));

function sayHello(username){
    if(!username){
        return "Please provide username!"
    }
    return `Hello ${username} welcome, have a nice day..!`
}

// console.log((sayHello()));
// console.log((sayHello("Supriya")));



