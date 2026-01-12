// arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ['Batman', 'Superman', 'Hulk'];

const myArr2 = new Array(1, 2, 3, 4, 5);    // another way to create an array

// console.log(typeof myArr);
// console.log(myArr[0]); 


//Array methods

// myArr.push(6); 
// myArr.push(7);
// myArr.pop();
// myArr.shift();   // removes the first element
// myArr.unshift(0); // adds an element at the beginning

// console.log(myArr.length); // length of the array
// console.log(myArr.includes(3));
// console.log(myArr);



// const newArr = myArr.join(); // converts array to string
// console.log(newArr); 
// console.log(typeof newArr);


//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); 

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // removes elements from original array

console.log(myn2);
console.log("C ", myArr);
