// for of

// [{}, {}, {}]
// ["", "", ""]

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }




// const greetings = "Hello World!";

// for (const greet of greetings) {
//   console.log(`Each letter: ${greet}`);
// }



// Maps
// const map = new Map();
// map.set('IN', "India");
// map.set('US', "United States");
// map.set('FR', "France");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ':-', value);
// }





// Objects
const myObj = {
  'game1': 'Chess',
  'game2': 'Football',
  'game3': 'Tennis'
}

for (const [key, value] of myObj) {
  console.log(key, ':-', value);
}
// TypeError: myObj is not iterable