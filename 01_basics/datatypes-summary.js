// Primitive
// 7 types : String, Number, Boolean, null (It is empty not a 0), undefined, Symbol (To make any value unique), BigInt (Some scientific value to handle) 

// Non-primitive or Reference Type
// Arrays, Objects, Functions

// Javascritp is dynamically written language unlike C++ JAVA, as we do not need to write datatype before declaring.

// Examples>
const score = 100 //Number
const scoreValue = 100.5 //Number: Noneed to define speciifically that it is float, decimal or anything. Number is number

const myName = "Jagriti" //string
const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined

// Symbol's work is to make unique
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 764093269236236466473624062347n //Use n at last to declare as bigInt


// Examples for the non-primitve
const heros = ["Hero1", "Hero2", "Hero3", "Hero4"]
console.log(heros);
console.log(typeof heros);

// Object
let myObj = {
    name: "Jagriti",
    age: 21
}

const myFunction = function() {
    console.log("Hello World!")
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(myFunction)