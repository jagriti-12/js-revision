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