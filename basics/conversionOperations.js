// Number to other type

let num = 42

let numberToString = String(num)

console.log(numberToString);
console.log(typeof numberToString);

// 42 => "42"
// 42 => true, >0 & <0 => true else false

// String to other type
let str="Supriya"

let strToNum = Boolean(str)

console.log(strToNum);
console.log(typeof strToNum);

// "32" => 32
// "Supriya" => NaN
// "43Supriya" => NaN
// "Supriya" => true
// "" => false

// Boolean to other type
let boolValue = false

let bolToStr = Number(boolValue)
console.log(bolToStr);
console.log(typeof bolToStr);

// true => "true", false => "false"
// true => 1, false => 0
console.log(typeof String(num));

// ***********************Operations*********************************

let value = 3
let val1 = -value

console.log(val1);

console.log(2+1)
console.log(3-2);
console.log(3*4);
console.log(2**3);
console.log(4/2);
console.log(3%5);

console.log("2"+3);
console.log(4+"5");
console.log("7"+6+8);
console.log(9+1+"9");

console.log((3+6)*2/3%((4+4)*2));

console.log(+true);
console.log(+"");

let num1,num2,num3
num1=num2=num3=3

// console.log(num2);

// Prefix and Postfix
let count=2
console.log(count++);
console.log(++count);