const user = {
    username: "viraj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage()

// console.log(this);  


// function chai() {
//     let username = "viraj";
//     console.log(this);
// }
// chai();


// const chai = function () {
//     let username = "viraj";
//     console.log(this.username);

// }


const chai =  () => {         // arrow function
    let username = "viraj";
    console.log(this);

}

// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);
   
// // parentheses are optional here but when we use curly braces (line 41) we need to use return statement


const addTwo = (num1, num2) => ({username: "viraj"})


console.log(addTwo(5, 7));




// const myArray = [1, 5, 7, 8];

// myArray.forEach()
