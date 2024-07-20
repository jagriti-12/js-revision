const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Direct pushing dc heros into marvel heros, basically it doesn't get merge instead of this it makes array into another array.

marvel_heros.push(dc_heros)

console.log(marvel_heros); //Output will be something like this: [A, B, C [D, E, F]]
console.log(marvel_heros.length); //[ 'thor'1, 'Ironman'2, 'Spiderman'3, 4th is this whole array as an element[ 'superman', 'flash', 'batman' ]]

// To merge two arrays, we can use concat() method

const arr1 = ["A", "B", "C"]
const arr2 = ["D", "E", "F"]

const arr3 = arr1.concat(arr2) //Return new array and merge it, where push adds arr2 to into arr1.
console.log(arr3); //Output will be: [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// Spread: Where all the arrays are separated in diff elements

const arr4 = [...arr1, ...arr2] //Spread
console.log(arr4);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(anotherArray);
const realArray = anotherArray.flat(Infinity) //Flat: returns a new array with all sub-array elements concatenated into it recursively upto the specified depth. //Infinity is used to check as many as array are there in single we can use number too like 1 it will check till 1 depth then.
console.log(realArray);

console.log(Array.isArray("Jagriti")) //false as it is not an array
console.log(Array.isArray([1, 2, 3])) //true
console.log(Array.from("Jagriti")) // Returns a new array, ['J','A','G','R','I','T','I']
console.log(Array.from({name: "Jagriti"})); //Returns an empty Array as we are not providing the parameter that from which we want to make array, on key basis or value basis.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.