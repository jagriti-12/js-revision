const accountId = 120203
let accountEmail = "jags.jagriti12@gmail.com"
var accountPassword = "password"
accountCity = "Jalandhar"
let accountState;

// accountId = 2 //not allowed - as it is constant, once declared can't reset or change any value in the entire code.
accountEmail = "jsachdeva2003@gmail.com"
accountPassword ="new"
accountCity = "chandigarh"

/*
Multi line comment:
Prefer not to use var because of issue in block scope
and functional scope. Scope is written under the curly braces {} 
*/

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);