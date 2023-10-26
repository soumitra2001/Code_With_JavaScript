// >, <, >=, <=, ==, !=, ===, !==

const isLoggedIn=false;

if(isLoggedIn === false){               // we can also be => if(!isLoggedIn){}
    console.log("User is not logged in");
}else{
    console.log("User successfuly logged in");
}

const score = 200
if(score>100){
    let grade="A"
    console.log(`Your grade: ${grade}`);
}else{
    console.log("Not bad");
}

let balance=5000
if(balance<=5000) console.log(`Add more, Balance: ${balance}`),
console.log("Hello");

const isValidUser= false, value=200;

if(isValidUser){
    console.log("Valid user");
}else if(value>=500){
    console.log(`Value is: ${value}`);
}else console.log("Nothing to say..!");

// Switch Case =>

const month =3

switch(month){
    case 1:
        console.log("January");
        break
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break
    case 4:
        console.log("April");
        break
    case 5:
        console.log("May");
        break
    default :
        console.log(`Hello Month: ${month}`);

}