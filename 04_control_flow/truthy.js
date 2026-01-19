const userEmial = [];

if (userEmial) {
  console.log("You have an email");
} else {
  console.log("You don't have an email");
}

// falsy values in JavaScript:
// false, 0, -0, BigInt(0) 0n, "", null, undefined, NaN

// truthy values in JavaScript:
// "0", 'false', " ", [], {}, function(){}


// if(userEmial.length === 0) {
//     console.log("Array is empty");
// }


const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
// used for detecting the object is empty or not



// Nullish Coalescing Operator (??): null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? undefined ?? 15 ?? 20;


console.log(val1);



// Ternary Operator
// condition ? true : false

const age = 17;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";

console.log(canVote);  

