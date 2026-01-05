const accountId = 144453
let accountEmail = "viraj@google.com"
var accountPassword = "viraj@123"
accountCity = "Jaipur"
let accountState;

// accountId = 2   // not allowed


accountEmail = "viraj@123"
accountPassword = "121212"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);