// const tinderUser = new Object();  // object constructor syntax
 
const tinderUser = {};  // object literal syntax 

tinderUser.id = "123abc";
tinderUser.name = "Viraj";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Viraj",
            lastname: "Rathour",
        }
    }

}

console.log(regularUser.fullname.userfullname.lastname); 

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2};
const obj3 = Object.assign(obj1, obj2);  // obj1 will act as target object and will be mutated

const obj5 = Object.assign({}, obj1, obj2);  // to avoid mutation of obj1 and target will be empty object

const obj4 = {...obj1, ...obj2};   // spread operator

console.log(obj3);
console.log(obj4);
console.log(obj5);

 

const users = [
    {
        userId: 1,
        userName: "Viraj",
    },
    {
        userId: 2,
        userName: "Viraj",
    },
    {
        userId: 3,
        userName: "Viraj",
    },
]

console.log(users[1].userId);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // tells whether the object has the specified property as its own property



