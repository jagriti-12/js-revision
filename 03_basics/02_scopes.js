let a = 10
const c = 30
var b = 20

console.log(a);
console.log(b);
console.log(c);
// In the scope VAR will give problem
let d = 70
if (true) {
    let d = 40
    const e = 50
    var f = 60
    console.log("Inner:", d);
}

console.log("Outer:", d); //Outer one!
// console.log(d); Will give error as scope is valid under parenthesis only 
// console.log(e); Will give error as scope is valid under parenthesis only 
console.log(f); //Printing result, Which is not good as scope is declared but it is working outside the scope too #var

// Another Video
function one() {
    const username = "Jagriti"

    function two() {
        const website ="youtube"
        console.log(username);
    }
    // console.log(website); //Giving error as it is out of the scope, so commenting out
    two()
}
one()

// Checking scope in if-else loop 
if (true) {
    const username = "jags"
    if (username === "jags") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ************** Interesting ****************


console.log(addOne(5))
function addOne(num){
    return num + 1
}

console.log(addTwo(5)) //Const declaration of function will not allowed to run before the function
const addTwo = function addTwo(num){
    return num + 2
}

console.log(addTwo(5))