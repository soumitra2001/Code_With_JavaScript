const myDate = new Date()

console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.getDate());
console.log(myDate.toUTCString());

let customDate = new Date(2024, 0, 1)
console.log(customDate.toDateString());

customDate = new Date(2030, 1, 29, 3, 23)  // If the date beyond the month then it will go for next month
console.log(customDate.toLocaleString());

customDate = new Date("05/15/2001")
console.log(customDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(typeof myTimeStamp);

console.log(customDate.getTime());

console.log(Math.floor((myTimeStamp-customDate)/1000));

myDate.toLocaleString("default",{
    weekday:"long"
})
console.log(myDate.toDateString());