//singleton 
// Object.create


// Object literals

const mySym = Symbol("key1");


const JsUser = {
    name: "Viraj",
    "full name": "Viraj Singh Rathour",
    [mySym]: "value using symbol",
    age: 22,
    location: "Lucknow",
    email: "viraj@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);     

JsUser.email = "viraj@newemail.com";
// Object.freeze(JsUser);   // freeze the object so that no changes can be made
JsUser.email = "after_freeze";
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());