"use strict"

const name = "Supriya"

// console.log(name.length);

console.log(name.substring(2,5))
//*******************slice() method in string**************************
// ****For starting index =>
// Negative index counts back from the end of the array — if start < 0, start + array.length is used.
// If start < -array.length or start is omitted, 0 is used.

// ***********For Ending index =>
// Negative index counts back from the end of the array — if end < 0, end + array.length is used.
// If end < -array.length, 0 is used.
console.log(name.slice(-6,3)); 

// console.log(name.__proto__);


const email = new String("  sg@google.com  ")

console.log(`My name is ${name} and email id is ${email}`);

console.log("Hello".toUpperCase());

console.log(name.trim());
console.log(email.split("@"));
