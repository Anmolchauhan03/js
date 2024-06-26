// const userEmail="an@mol.ai"
// const userEmail=""
// const userEmail=[]

// if (userEmail) {
//     console.log("got user email");
// }
// else{
    // console.log("don't get email");
// }

/* notes :-
   false valuse: flase , 0 , -0 , BigInt (0n),"", null , undefined , nan

   truthy value : other then false such as-> "0",  'false', [], {} , function(){}
*/

// if (userEmail.length===0) {
//     console.log("array is empty");
// }

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}

// nullish coalescing operator (??): null , undefined 

let val1;
// val1= 5 ?? 10
// val1= null?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20

 console.log(val1);

 // terniary operator  => condition ? true :false

 const iceTeaprice=100
iceTeaprice<=80 ? console.log("less than 80 "): console.log("more than 80");;