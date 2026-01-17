// Immediately Invoked Function Expression (IIFE)
(function coffee(){        // Named IIFE
    console.log(`DB CONNECTED`);
})();   

// we use iife to avoid pollution from global scope so that variables and functions inside iife are not accessible from outside.



( (name) => {            
    console.log(`IIFE with arrow function ${name}`);
})("with passed argument");