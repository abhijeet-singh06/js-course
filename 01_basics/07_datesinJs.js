//Dates

let myDate = new Date();
// console.log(myDate); // Current date and time
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate1 = new Date(2025, 0, 26);
let myCreatedDate2 = new Date(2025, 0, 26, 5, 3);
let myCreatedDate3 = new Date("01-14-2025");

// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toLocaleString());

let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(myCreatedDate3.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());    // January - December : 0 - 11
console.log(newDate.getDate()); 
console.log(newDate.getFullYear());
console.log(newDate.getDay());    // Sunday - Saturday : 0 - 6

console.log(`Date: ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default',{
    weekday: 'short'
}));