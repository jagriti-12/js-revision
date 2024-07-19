let scores = "33"

console.log(typeof scores)
console.log(typeof (scores))

let valueInNumber = Number(scores)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33 type is string
//  "33abc" => Nan (but type is number) NaN: not a number
// true => 1; false =>
// Basically, when we are accepting numbers from the form by the user through frontend,
// to make sure that is it really number or not. to check the same we first check
// the type of the value and then convert it to number.

console.log("-------------------");
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1 is getting converted in Boolean and resulting out as True.

// Let's check out that what will happen, if and empty string will be there or if any string will be there will result out to the true.
console.log("-----------------");
let emptyString = ""

let booleanEmptyString = Boolean(emptyString)
console.log(booleanEmptyString)

// 1 => true; 0=> false
// "" => false
// "Jagriti as string" => true
console.log("-------------------");
console.log("Converting Number to String");
console.log("-------------------");
let someNumber = 12
console.log(typeof someNumber);

let someString = String(someNumber)
console.log(someString)
console.log(typeof someString);


// ****************** OPERATIONS **********************
console.log("*******OPERATIONS*******");
let value = 3
let negValue = -value //Making the value negative 
console.log(negValue)

console.log("----Start Basic Simple Operations----");
console.log(2+2); //add
console.log(2-2); //sub
console.log(2*2); //multiply
console.log(2/2); //divide
console.log(2%2); //remainder
console.log(2**2); //power
console.log(2**3); //power
console.log("----End Basic Simple Operations----");

console.log("----Start Increment and Decrement Operations----");

console.log(value++); //3
console.log(value); //4
console.log(value--); //4
console.log(value); //3
console.log(++value); //4
console.log(--value); //3

console.log("----End Increment and Decrement Operations----");
console.log("----String Operations----");
let str1 = "Hello"
let str2 = " Jagriti"

let str3 = str1 + str2
console.log(str3);

console.log("----End String Operations----");

// Where error occurs:
// 1. string + number
// 2. number + string

console.log("----Start Error Operations----");
console.log(2 + "2"); //2 + "2" = "22"
console.log("Error: " + 2 + 2); //Error: 2 + 2 = 4 

let errorValue = 10 / "abc" // Error: Division by zero
console.log(errorValue);
console.log(typeof errorValue); //number

console.log("----End Error Operations----");

// /String and Number operations
console.log("----Start String and Number Operations----");
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32
// Simple Reason if string is prior then all the numbers and value will be considered as string.
// If number is prior, then mathematical operation will be done and then string will be added.

// To write a clean code use below references, Above are the messy code, which companies are not allowed to use for PR
console.log( ( 3 + 4 ) * 5 % 3 );

console.log(+true); // 1 (No use! only for exam prep)
console.log(+""); // 0 (No use! only for exam prep)

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not a correct way to define!

console.log("Game Counter Increment Checking");
let gameCounter = 100
gameCounter++ 
++gameCounter
// There is difference between gameCounter++ and ++gameCounter (prefix and postfix from mdm js increment)
console.log(gameCounter);
console.log("----End String and Number Operations----");