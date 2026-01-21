// for...each loop
const coding = ["js", "ruby", "py", "java"];

// coding.forEach( function (val){
//     console.log(val);
// })




// // Arrow function is another way for , for...each 

// coding.forEach( (val) => {
//     console.log(val);
// });




// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);





// coding.forEach( (val, index, arr) => {
//     console.log(val, index, arr);
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "pyhton",
        languageFileName: "py"
    },
]
myCoding.forEach((element) => {
    console.log(element);
    console.log(element.languageName);
});
