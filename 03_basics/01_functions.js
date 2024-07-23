// Functions
// function myName() {
//     console.log("J");
//     console.log("a");
//     console.log("g");
//     console.log("r");
//     console.log("i");
//     console.log("t");
//     console.log("i");
//     console.log("!");
// }

// myName() // Returning myName Function and calling it by function reference

// Adding to number

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
// Method 2:
function addTwoNumber(num1, num2) { //num1, num2 Is a parameter not an arguments
    console.log(num1 + num2)
}
// Calling a function:
// When calling it or passing values is known as arguments
addTwoNumber(3,4) // 7: Taking as number
addTwoNumber(3, "4") // 34 Taking as string as we added one string, this is the place where error occurs
addTwoNumber(3, null) //3 Not given a second number
addTwoNumber(3, "J") //3J as string is there so thought of 3 is also string

// To save the result in some variables we need to write a function like this:
function sumNum(number1, number2) {
    let result = number1 + number2
    return result //After calling return no value variable will be resulted out.

    // We can directly use below command too:
    // return number1 + number2
}

const result = sumNum(9,12)
console.log("Result: ", result); 

// Print message when user logged in

function logInMsg(username) {
    return `${username} just logged in!`
}
console.log(logInMsg("Jagriti")) // Jagriti just logged in!
console.log(logInMsg("")) // just logged in!
console.log(logInMsg()) // Undefined just logged in! 

// Check if the value is given then it will print.
function checkAndPrint(user) {
    if (user === undefined){
        console.log("Please enter a correct value")
        return
    }
    return `${user} just logged in!!`
}
console.log(checkAndPrint("Jagriti")); //Will print Jagriti just logged in!!
console.log(checkAndPrint()); // Please enter a correct value undefined
