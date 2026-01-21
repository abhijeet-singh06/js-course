const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java'
}


// Now using for...in to iterate over the keys of the object

// for(const key in myObject) {
// console.log(`${key} shortcut is for ${myObject[key]}`);
// }




const programming = ["js", "py", "rb", "java"];

// Using for...in to iterate over the values in the array
for (const key in programming) {
    console.log(key);
    console.log(`${key} shortcut is for ${programming[key]}`);
}





// const map = new Map();
// map.set('IN', "India");
// map.set('US', "United States");
// map.set('FR', "France");

// for (const key in map) {
//     console.log(key);
//     // TypeError: map is not iterable when using for...in
// }
