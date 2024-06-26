// if statement
// the condition of if loop is always true  not be false ,after that it will go in the deep of code
if (true) {                      
    
}
if (false) {
    // from line 7 it will not be  executed 
}

// comparison operator (<,>,==,=>,<=,!=,===,!==)

// const temprature=41
// if (temprature<50) {
//     console.log("less then 50");
// }
// else{
//     console.log(("temperature is greater than 50"));
// }


// const score=200
// if (score>100) {
//     const power="fly"
//     console.log(`user power:${power}`);
// }


// short-hand notation
// const balance =1000
// if (balance>500) console.log("test "); 

// const balance =1000
// if (balance<500)  
// {
//     console.log("less than");
// }
// else if (balance<750)
// {
//     console.log("less than 750");
// }
// else if (balance<900)
// {
//     console.log("less than 900");
// }
// else
// {
//     console.log("less than 1200");
// }


const userloggedIn =true 
const debitcard=true
const loggeddInfromgoogle=false 
const loggeddInfromemail=true

if (userloggedIn && debitcard)
{
    console.log("Allow to buy course");
}
if (loggeddInfromgoogle || loggeddInfromemail)       // pipe sign allow the one true and flase condition also
{
    console.log("successfull login");
}


