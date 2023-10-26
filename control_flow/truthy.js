const userEmail="s@supriya.go"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("User email not found");
}

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

// thuthy values => "0", "supriya", "false", "  ", [], {}, function(){}

const emptyObj={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Got an object");
}

// Nullish Coalescing Operator(??) => null, undefined
// Safe checking for null and undefined value

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 6
// val1 = undefined ?? 10
// val1 = 8 ?? null

val1 = null ?? 7 ?? 12


console.log(val1);

// Terniary Operator =>

const price =400

price<500 ? console.log("Nice product") : console.log("Average product");