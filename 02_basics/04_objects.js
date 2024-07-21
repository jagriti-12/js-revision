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
// {} => This is used because it will act as target and rest all the sources. and all the values form the sources will be added into {} this empty set not in any other.
console.log(obj1); //Checking that obj2 elements are in in obj1 now.
// To Remove this redundancy we can have {} this.

const A1 = {1: "J", 2: "S"}
const A2 = {3: "P", 3: "K"}
console.log("Elements on combining A1 and A2:");
console.log(Object.assign({}, A1, A2)); //Now all the values of A1 and A2 will be added in new one instead of A1
console.log("Elements in A1 after combining:", A1);

// Spread
const A3 = {...A1,...A2}
console.log(A3);

// How data came from database => In the form of Array with Objects or Objects in an Array

const user = [
    {
        name: "Jagriti", 
        id: 1
    },
    {
        name: "Sachdeva", 
        id: 2
    },
    {
        name: "Jags", 
        id: 3
    },
]

// Accessing First Value
console.log(user[0].name); // Jagriti

// To access all the keys from the object we can run the command:
console.log(Object.keys(user)); // [0, 1, 2] and in the form of array.
console.log(Object.values(user)); // [{key:Value},{key:value}...]
console.log(Object.entries(user)); //Returns an array inside an array [['key','value],[key,value]]

console.log(user.hasOwnProperty('isLoggedIn')); //False as this property is not in the user object!

const course ={
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// Accessing method : Dot notation or Square bracket notation.
console.log(course.courseName); //JS in Hindi
console.log(course['courseInstructor']); //Hitesh

// Another new method:
const {courseInstructor} = course // const {value} = object 
console.log(courseInstructor); //Hitesh

// To destructure the value as courseInstructor is the big key or name so we are destructing it from courserInstructor to the Instructor only

const {courseInstructor: Instructor} = course //const {oldName: newName} = object
console.log(Instructor); //Hitesh

// API
// In Json Format 

// {
//     "name": "jagriti1",
//     "age": "21"
// }

// In an array format
// [
//     {},
//     {},
// ]

// Famous API: Random user me
