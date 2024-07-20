// Object Declaring as constructor or singleton
const tinderUser = new Object() //singleton Object
const userTinder = {} //Non-Singleton Object

console.log(tinderUser); // {}
console.log(userTinder); // {}

// Accessing properties and methods
tinderUser.name = "Jagriti"
tinderUser.id = "21bcs2601"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { name: 'Jagriti', id: '21bcs2601', isLoggedIn: false }

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Jagriti",
            lastName: "Sachdeva"
        }
    }
}

console.log(regularUser.fullName); //{ userFullName: { firstName: 'Jagriti', lastName: 'Sachdeva' } }

// Accessing nested properties
console.log(regularUser.fullName.userFullName.firstName); //Jagriti
console.log(regularUser.fullName?.userFullName.firstName); //Question is used to check weather FullName is existed or not!

// Merging Object
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

const obj3 = {obj1, obj2}
console.log(obj3); //{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }
console.log(Object.assign(obj1, obj2)); // { 1: 'A', 2: 'B', 3: 'C', 4: 'D' } //Values are going into obj1
// to make the values into new one add {} these before obj1, obj2.
console.log(obj1);