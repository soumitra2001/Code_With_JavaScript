const accountId = 101
let accountEmail = "sg@gmail.com"
var accountPassword = "1725"
accountCity = "Kolkata"
let accountState;

// accountId=93   => Re-assignment to a constant variable is not possible

accountEmail = "sghorai@email.com"
accountPassword = "abc14"
accountCity = "Bangalore"

/* 
    Prefer not to use 'var' because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

