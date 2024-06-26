// immeditely invoked function expression (IIFE)
// function chai() {
//     console.log(`database connected`);
// }
// // chai()

// for removing the global scope we use the iife we wrap the function in ().

(function chai() {
    // named IIFE
    console.log(`database connected`);
})();

( (name) => {                                                    // arrow function
    console.log(`database connected To ${name}`);
})('anmol')

 

