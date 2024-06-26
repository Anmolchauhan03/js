//scopes : {} thse are scopes

// let a =100                // global scopes
// if(true){                 // block scopes
// let a=20
// const b =40
// let c= 60
// console.log("inner(a):",a);
// }
// console.log(a);

// nested scopes

function one() {
    const usernsme="anmol"
    function two() {
        const website= "youtube"
        console.log(usernsme);
    }
    // console.log(website);
     two()
}
// one()

if (true) {
    const username="anmol"
    if (username==="anmol") {
    const website="youtube"
    // console.log(username + website);
    }
    // console.log(website); 
}
// console.log(username);


//*******************interesting*************** */
console.log(addone(5));
function addone(num) {
 return num + 1    
}

const addtwo =function (num) {
    return num + 2
}
console.log(addtwo(5));

