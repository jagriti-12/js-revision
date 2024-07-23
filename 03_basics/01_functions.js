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

// Day 2 Functions:
function calculateValue(...price) { // ... acting as rest operator in this
    return price
}
console.log(calculateValue(200)); //200
console.log(calculateValue(200, 300, 400, 500)); // return array but it will only proceed if we have added "..." in the parameter

function newValue(val1, val2, ...newPrice) {
    return newPrice
}
console.log(newValue(200,300,400,500,600,700)) // [400, 500, 600, 700] According to the rest operator as value 200 and 300 are given to val1 and val2 variables.

// Handle objects in Functions:
const user = {
    username:"Jagriti" ,
    age: 21
}

function handleObject(handling) {
    console.log(`UserName is: ${handling.username} and userAge is ${handling.age}`)
}

handleObject(user)

// Another calling method:
handleObject(
    {
        username: "Sachdeva",
        age: 21
    }
)

// Array in Functions:
const arr1 = [12, 9, 2, 11, 16, 10, 17, 10]

// Function which will return array's second value
function arrayHandle(valueReturning) {
    console.log(arr1[1])
}

arrayHandle()

// another method
function valueHandle(array1) {
    return array1[1]
}
console.log(valueHandle([9, 12, 2, 11, 20, 16, 17, 10]))