"use strict" //treat all JS code as a newer version

// alert("3+3") //As we are using nodejs not a browser, if you want to run this, then you can try on browser -> inspect -> console.

console.log(3+3); console.log("Jagriti");

let myName = "Jagriti"
let age = 22
let isLoggedIn = false
let state //Declare but no value given
let city = null //Declare with null value, NULL != 0

console.table([myName,age,isLoggedIn,state,city])

// DataTypes
// number => 2 to power 53
// bigint 
// string => ""
// boolean => true/false
// null (standAlone value + dataType) 
// undefined =>
// symbol => uniqueness 


// objects

// To check the data type use "typeof" eg: console.log(typeof "jagriti") or instead of jagriti can be any declarative name

console.log("The type of myName-'Jagriti' is:", typeof myName); //string
console.log("The type of age of Jagriti is:", typeof age); //number
console.log(typeof "Sachdeva"); //string
console.log(typeof null); //object
console.log(typeof undefined); //undefined
