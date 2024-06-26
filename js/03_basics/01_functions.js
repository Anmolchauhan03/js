// // // //function : by thes using of function you can call the angin & agian without witten a code 
// // // function mySum(number1, number2) {                  // number1 & number2  are the perameters 
// // //     // case-1
// // // //     console.log(number1+number2);
// // // //     // case-2

// // // // let result = number1 +number2
// // // // return result 
// // // // // console.log("anmol");                               // it will not be work because  of return. the value is back to the return function

// // // // case-3 
// // // return number1+number2
// // // }

// // // // mySum(3,5)                                       // (3,5) are the arguments.
// // // // mySum(3,null)
// // // // mySum(5,"a")
// // // // mySum(5,"12")
// // // // const result= mySum(3,5)
// // // // console.log("result:",result);


// // // function loginusermessge(username ="anmol") 
// // function loginusermessge(username)
// // {

// //     // if (username === undefined)
// //     if (!username) 
// //         {
// //         console.log("please enter your username");
// //                 return 
// //     }  
// //     return `${username} welcome! sir`
// // }
// // // console.log(loginusermessge("Anmol ->"));
// // console.log(loginusermessge(""));
//  function  calculatecartprice(...num1)    // three dots converted arguments into array
//   {
//         return   num1   
//  }

// //  console.log(calculatecartprice(200,300,400,500));

//  const user ={
//     username:"Anmol",
//     price:"3000",
//     courseteacher:"anmol"
// }
// function handleobject(anyobject)
//  {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// // handleobject(user)
 
// handleobject({                                                                                 // you can also create a new object, at a time 
//     username:"payal",
//     price:3000
// })


const newArray =[200,300,400,500,800,100]
function returnSecondValue(getArray) {
    return getArray[3]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,400,500,800,1000]));