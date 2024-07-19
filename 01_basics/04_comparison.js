// Comparison of DataType
console.log("Comparison of DataType");
console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 <= 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

console.log("Error Example when same type of datatype is not compared!!!");
console.log("2" > 1); //true
console.log("02" > 1); //true

// Null Comparison
console.log("Null Comparison"); 
// The reason:  and equality check == and comparisons > < >= <= work differently. Comparison convert null to a number, treating it as 0. That's why (0) null >= 0 is true and (1) null > 0 is false.
// NOTE: NULL & Undefined are not good to choose
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log("Undefined comparison: ",undefined == 0); // always false for any operations

// Strict Check => ===
console.log("Strict Check => ===");
console.log("2" == 2) //Check for the value
console.log("2" === 2) //Check for the value and type (Triple Equal will not convert and check types as it is string and number.)

// Equality Operators
console.log("Equality Operators");
console.log(2 == "2") // true (value comparison)
console.log(2 === "2") // false (type comparison)

// Logical Operators
console.log("Logical Operators");
console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // false