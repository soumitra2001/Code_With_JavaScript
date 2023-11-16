let arr=[23,74,45,2,35,54]

// arr.map( (num)=> console.log(num))

let nums = arr.map((num)=>{
    return num+10
})

nums = arr
        .map( (num)=> num*10 )
        .map( (num)=>{
            if(num>50)return num+1;
            return num+10;
        })
        .filter( (num)=> num>=100 && num<=400)

console.log(nums);
