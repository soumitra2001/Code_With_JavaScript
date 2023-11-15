// for-of loop =>

let arr=[3,8,9,4,1]

for(const num of arr){
    console.log(num);
}


const str="My name is Supriya"

for(const ch of str){
    if(ch===' ')continue;

    console.log(ch);
}

// for-in loop =>

let obj ={
    name:"Supriya",
    age:22,
    email:"hello@bye.com"
}

for(const key in obj){
    console.log(obj[key]);
}


