const name = "Viraj";
const repoCount = 50;

// console.log(name + repoCount + " repositories");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);              
// k/a string interpolation



const gameName = new String('hitesh-hc')

console.log(gameName[0]); // h
console.log(gameName.__proto__); // String {}
console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // HITESHHC

console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString); 

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1 = "     Viraj     ";
console.log(newString1);
console.log(newString1.trim());      // removes spaces from start and end


const url = "https://www.google.com/viraj%20singh";
console.log(url.replace('%20', '-')); 

console.log(url.includes('google'));

console.log(url.split('/'));
console.log(url.split('/')[3]);  // we want part after 3rd /

console.log(gameName.split('-'));

