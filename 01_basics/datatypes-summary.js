// Primitive 
// 7 types: String, Number, BigInt, Boolean, Undefined, Symbol, Null

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;  

const id = Symbol("12345");
const anotherId = Symbol("12345");

console.log(id === anotherId); 



// Reference (Non-primitive)

// Array, Object, Function

const heros = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Viraj",
    age: 21,
}

const myFunc = function() {
    console.log("Hello World");
}

console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunc);
console.log(typeof id);



// ***************** Memory ******************

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "Viraj Singh";

let anotherName = myYoutubename;
anotherName = "Code with Viraj";

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne;

userTwo.email = "viraj@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);