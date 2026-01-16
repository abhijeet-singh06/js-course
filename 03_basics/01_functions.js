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
// console.log(loginUserMessage("Viraj"));

function calculateCartPrice(vale1, val2, ... num1){
    return num1;
}

// console.log(calculateCartPrice(20, 30, 40, 50, 60));


const user = {
    username: "Vraj",
    price: 20,
};

function handleObject(anyobject){
    console.log(`Username is: ${anyobject.username} and price is: ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    price: 30,
});  

const myNewArray = [200, 400, 300, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([150, 250, 350, 450]));

