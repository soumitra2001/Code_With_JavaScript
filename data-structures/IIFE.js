// Immediately Invoked Function Expressions(IIFE)


(function dbConnect(){
    // named IIFE
    console.log(`Database connected..!`);
})();
// We have to explicitly end the immediate inovoked function using(;)

( () => {
    console.log(`Second Database connected..!`);
})();

( (name) => {
    console.log(`Hello and welcome ${name}`);
})("Supriya")
