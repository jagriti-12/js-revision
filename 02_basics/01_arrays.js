// Arrays
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr)
// JS Can have different dataType in array.

// Other Method to declare:
const myArrTwo = new Array(0, 1, 2, 3, 4, 5)
console.log(myArrTwo);

// Accessing
console.log("Index 0 Value in Array: ",myArr[0]); //0 Index based by: start from 0 ..
// JS Creates Shallow and Deep Copy.
// Shallow: Shares same references which means if i'll change in either will change in another too
// Deep: Do not share the same references and do not change in original.

// Arrays Methods:
myArr.push(6) //Push is used to insert value in an array.
myArr.push(7) 
console.log(myArr);
myArr.pop() //Removes the last one
console.log(myArr);

myArr.unshift(12) //Better not to use, as here is less values so didn't take time to shift values as unshift places the value at 0 index.
console.log(myArr);

myArr.shift() //no parameter req
console.log(myArr);

console.log(myArr.includes(12)); //false as we used shift method above
console.log(myArr.indexOf(2)); //Checks that it is or not.

const newArr = myArr.join() //It converts the array into string but the values are same and values are binds.

console.log(myArr)
console.log(newArr);
console.log(typeof newArr);

// Another Method: Slice and Splice
console.log("Slicing and Splicing Method of array");
console.log("A ", myArr);

const myNewArray = myArr.slice(1, 3) //Includes 1 and 2 .. But 3 will not include //Return from the given particular range
console.log(myNewArray);
console.log("B ", myArr);

const myAnotherArray = myArr.splice(1, 3) 
console.log("C ", myArr); //Splice manipulates the original one.
console.log(myAnotherArray);