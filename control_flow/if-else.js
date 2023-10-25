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
