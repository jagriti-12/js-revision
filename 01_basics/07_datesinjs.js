// Dates

//Created Instance
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); //Converting into string
// Running all the important Methods of date to read: 
/*
toDateString
toISOString
toJSON
toLocaleDateString
toLocaleTimeString
toLocaleString
toString
toTimeString
*/
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2003, 1, 12, 5, 10) //Format of writing date: Year, Month(Index of 0 to 11 [1:Feb], Date) to add time (2003[year], 1[feb month index], 12[date], 5[Hour Time], 10[Minute Time])
console.log(myCreatedDate.toDateString()); //Without Time [Day, Month, Date, Year]
console.log(myCreatedDate.toLocaleString()); //With Time [Date, Month, Year, Time]

// If sometimes you want to add some specific type of writing method of date like: YYYY-MM-DD
let newDate = new Date("2003-02-12") 
console.log(newDate.toLocaleString());

// If sometimes you want to add some specific type of writing method of date like: MM-DD-YYYY[Mostly Used]
let betterMethod = new Date("02-12-2003")
console.log(betterMethod.toLocaleString());

// Checking out time stamps
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(betterMethod.getTime());

console.log(Math.floor(Date.now()/1000)); //Nearest Value: Using Floor

// Some Other Methods:
let nayaDate = new Date()
console.log(nayaDate);
console.log(nayaDate.getFullYear()); //Returns Year Only
console.log(nayaDate.getMonth()); //Returns Month Only in Index value to get out of index use +1 too so that normal user can't get confused.
console.log(nayaDate.getDay()); //Returns Day Only
console.log(nayaDate.getHours()); //Returns Hours Only
console.log(nayaDate.getMinutes()); //Returns Minutes Only
console.log(nayaDate.getSeconds()); //Returns Seconds Only
console.log(nayaDate.getMilliseconds()); //Returns Milliseconds Only
console.log(nayaDate.getTime()); //Returns Time in Milliseconds
console.log(nayaDate.getDate());

`${nayaDate.getDate()}` //Returns current date. 

console.log(
    nayaDate.toLocaleString('default', {
        weekday: 'long'
    })) // Returns the full length of day.