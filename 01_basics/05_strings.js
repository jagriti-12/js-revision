const name = "Jagriti"
const age = 21

// console.log(name + " " + age); No one uses this, as it is outdated

// Modern Method is also known as String Interpolation
console.log(`Hello my name is ${name} and my age is ${age}`) 

// Another Method to declare
const gameName = new String('jagriti')
console.log(gameName);
console.log(gameName[0]); //Which letter is at 0 index
console.log(gameName.length); //Length of string
console.log(gameName.toUpperCase()); //Convert the string into Caps.
console.log(gameName.charAt(2)); //to check which character is at 2.
console.log(gameName.indexOf('j')); //To check letter at which index place

//String methods that return new string 

// slice() method returns a new string with a portion of the string extracted between start and end indices.
console.log(gameName.slice(1, 3)); //return particular part from 1index to 3rd

// substring() method returns a new string with a portion of the string extracted between start and end indices.
console.log(gameName.substring(4, 7)); //x,y where x is start index and y is end index

// To get rid of extra space

const myName = "      JAGRITI       "
console.log(myName);
console.log(myName.trim()); // removes whitespace from both ends + line terminators
console.log(myName.trim());

// Replace method
const url = "https://www.linkedin.com/in/jagriti%20sachdeva/"
console.log(url.replace('%20','-'))

console.log(url.includes('sachdeva'))

console.log(gameName.split('i')); //Separator