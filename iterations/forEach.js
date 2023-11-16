let arr=[2,8,6,4,10]

arr.forEach(function(ele){
    console.log(ele);
})

arr.forEach(ele =>{
    console.log(ele);
})

let objArr=[
    {
        first_name:"supriya",
        last_name:"ghorai"
    },
    {
        first_name:"som",
        last_name:'maity'
    },
    {
        first_name:"auish",
        last_name:"babu"
    }
]

objArr.forEach( (obj) =>{
    console.log(obj.last_name);
} )

