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
