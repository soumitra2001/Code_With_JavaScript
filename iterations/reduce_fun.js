let numArr=[3,5,7,1]

const total=numArr.reduce((acc,cVal) => {
    return acc+cVal
},0)

// console.log(total);

const courses=[
    {
        course:"Js",
        price:2999
    },
    {
        course:"Java",
        price:1999
    },
    {
        course:"Python",
        price:1999
    }
]

let totalPrice=courses.reduce( (acc,course)=> acc+course.price, 0)

console.log(totalPrice);