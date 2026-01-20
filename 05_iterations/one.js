//for 

for (let i = 0; i < 10; i++) {
    const index = i;
    if ( index == 5) {
        // console.log("Five is found");
    }
    // console.log(index);
}


// for (let i = 0; i <= 10; i++) {
//     const index = i;
//     for(let j = 0; j <= 10; j++) {
//         console.log(i + " * " + j + " = " + (i * j));
//     }
    
// }



let myArray = ["flash", "batman", "superman", "wonderwoman"];

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}



// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Five is found");
        break;
    }
    console.log(`value of i is: ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Five is found");
        continue;
    }
    console.log(`value of i is: ${index}`);
}