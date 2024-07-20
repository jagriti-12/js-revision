const score = 400
console.log(score); //400  As default number type is picked

const balance = new Number(100)
console.log(balance); //[Number: 100] //DataType is defined 

//Some Prototype or Methods or Properties.
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //23.9 round off upto 1 decimal place
const otherNumberTwo = 123.8966
console.log(otherNumberTwo.toPrecision(3)); //124 Round off done
//Number of significant digits. Must be in the range 1 - 21, inclusive. Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const anotherNumber = 10000000
console.log(anotherNumber.toLocaleString('en-IN')); //Return in the Indian Rupee Standard method of Number.

// For direct max, min, infinite, isInteger, value can check on console by using "Number.MAX_VALUE" Similarly all functions will be pop up.

// *************** MATHS ************************

// Math
console.log("******MATHS!******");
console.log(Math.PI); //3.141592653589793
console.log(Math.abs(-10)); //10 [Negative to POsitive conversion only]
console.log(Math.round(4.3)); //4
console.log(Math.floor(4.3)); //10 For lower nearest Value
console.log(Math.ceil(4.3)); //11 For Upper nearest Value

console.log("******RANDOM*******");
console.log(Math.random()); // Any random Value between 0 to 1
console.log(Math.random() * 10); // Any random Value between 0 to 10
console.log((Math.random() * 10) + 1); // To avoid Zero Value
console.log(Math.floor(Math.random() * 10) + 1); // To avoid Zero Value and lower value and make it round off

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1)); //This is not giving min 10 so we added +min value in the answer below
console.log(Math.floor(Math.random() * (max - min + 1) + min)) //Use of floor indicates to round off the value.
