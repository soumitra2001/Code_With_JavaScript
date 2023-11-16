let nums=[4,7,9,3,8,5]

const arr=nums.filter( (num)=> {
    return num;
})

console.log(arr);

const arr2=nums.filter( (num)=> num>4 )

console.log(arr2);


// By filter() method we only can iterate the data according to conditions but we can't change the or modify the value