"use strict";

// alert("Hello") // We are using nodejs, not browser

console.log(3+4)

console.log("Hello Supriya")

// number 
// bigint
// string => ""
// boolean => true/false
// null => Standalone value
// undefined 
// symbol => unique


console.log(typeof null); // object

console.log(typeof undefined); // undefined

const obj = {
    name:"Supriya",
    email:"sh@gmail.com"
}

console.log(obj.email);

const fun = function(a,b){
    return a+b;
}

console.log(fun(9,2));