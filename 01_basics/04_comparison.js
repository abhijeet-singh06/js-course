//comparison 
console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null == undefined);

// thes reason is that an equality check(==) and comparisons >, <, >=, <= work differently.
// For comparisons, JavaScript converts null to a number, treating it as 0. thats why null >= 0 is true.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
// in case of undefined, it is not converted to any number, so all comparisons except != and !== result in false.