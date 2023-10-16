const myArr = [2,4,1,4,9]
console.log(myArr);

console.log(myArr.concat([8,3]).toString());

let arr = [1, "Hello", true, 6, null]  // Within the array we can store any thing(data type)

console.log(arr[4]);

console.log(myArr.length);

//******We can add or modify value but we can't reassign the const variable********
myArr.push([1,2],8)

myArr[0]=3

// remove last element
myArr.pop();
myArr.pop();

// Add element at first
myArr.unshift(1)

// Remove element from first
myArr.shift()
console.log(myArr);

// // slice and splice
console.log(myArr.slice(1,3));
console.log("After slice Operation: ", myArr);

console.log(myArr.splice(1,3));
console.log("After splice Operation: ", myArr);

const fruits = ["Apple", "Orange", "Banana"]

const juices = ["Orange Juice", "Mango Juice"]

fruits.push(juices);
console.log(fruits);

let mixArr = fruits.concat(juices)
console.log(mixArr);

let newArr = Array(...fruits, ...juices)
console.log(newArr);

console.log(Array.from("Supriya"));
console.log(Array.from({name:"Supriya"})); // Interesting...

console.log(Array.of(1, 2, 3));

