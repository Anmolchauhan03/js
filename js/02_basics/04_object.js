// // const tinderUser= new Object()

// const tinderUser={}

// tinderUser.id ="12345abc"
// tinderUser.name="anmol"
// tinderUser.loggedIn=false

// // console.log(tinderUser);

// const regularUser={
//     email:"anmol@gamil.com",
//     fullname:{
//         userfullname:{
//             firstname:"payal",
//             lastname:"rajput",
//         }
//     }
// }
// // console.log(regularUser.fullname.userfullname);

// const obj1={1:"anmol",2:"with",3:"study"}
// const obj2={4:"payal",5:"with",6:"study"}
// // const obj3={obj1,obj2}                       // gives a same array 's problem

// // const obj3= Object.assign({}, obj1,obj2)

// const obj3={...obj1,...obj2}
// // console.log(obj3);

// const users =[
//     {

//     },
//     {
    
//         id:123,
//         email:"anmol@gmail.com"
//     }, {
    
//         id:456,
//         email:"anmol@gmail.com"
//     },
//     {
    
//         id:789,
//         email:"anmol@gmail.com"
//     }
// ]
// users[1].email
// console.log(tinderUser);
// // console.log(users);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('anmol'));

// ****************de-structriing*************

const course ={
    courename:"js",
    coursefees:"3000",
    courseteacher:"anmol"
}
// course.couretaacher
const{courseteacher:ct}=course    //you can chge the name acc to you , this is  call obj de-structuring 
// console.log(courseteacher);
console.log(ct);



