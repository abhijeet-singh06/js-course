function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("r");
    console.log("a");
    console.log("j");
}

// sayMyName();


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
addTwoNumbers(5, "a");


function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(5, 7);   // 12
// console.log("Result: ", result); 


function loginUserMessage(username = "Abhi"){
    if (username === undefined){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Vraj"));
console.log(loginUserMessage("Viraj"));

