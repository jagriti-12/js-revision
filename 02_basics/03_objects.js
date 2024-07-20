// Two ways to declare objects: literals and constructors
// Constructor => Singleton, Literals will not form singleton

// Object Literals
// Object is having key and value pair
// object => {}

// How to declare symbol:
const Symbol1 = Symbol ("key1")
// to add this in object create a square bracket and then add it as key.

const JsUser = {
    name: "Jagriti", //By default system takes name = "name"
    "full Name": "Jagriti Sachdeva", //Can't access it by dot notation as we are giving string.
    age: 21,
    location: "Jalandhar",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"],
    // Symbol key
    [Symbol1]: "symbol value" 
}
console.log(JsUser);
console.log(typeof JsUser[Symbol1]);

// How to access objects:
// Method 1: Tho it is not the correct.
// Dot notation

console.log(JsUser.name); // Jagriti
// console.log(JsUser[name]) // Not defined as by default system is taking name = "name" in string 

// Method 2: Square bracket notation
console.log(JsUser["name"]); // Jagriti
console.log(JsUser["full Name"]); // Jagriti Sachdeva
// console.log(JsUser.full Name); //Giving error

// How to change values.
JsUser.email = "abc@123"

// To lock the values, we cant freeze it so that no one can change it.
// Object.freeze(JsUser)
JsUser.email = "xyz@123" //No error will be shown, but it will not change as just above we freeze it.

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello World");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting); //Undefined [scope]
console.log(JsUser.greeting()); //Showing it is not a function
console.log(JsUser.greeting2()); //Hello Js User, Jagriti along with undefined