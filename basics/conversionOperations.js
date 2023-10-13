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

