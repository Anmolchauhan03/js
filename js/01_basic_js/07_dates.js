// dates : it is a object
//  let myDate =new Date ()
//  console.log(myDate);
//  console.log(myDate.toISOString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleDateString());
//  console.log(typeof myDate);                    // object

// // creating the dates   
// let myCreateDate=new Date(2024,0,23 ,5 ,3 ,6)
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toLocaleDateString);

// let myTimeStamp=Date.now()
// // console.log(myTimeStamp);
// // console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getHours());

// ` ${newDate.getDay()} and the time is ${12.30}`

newDate.toLocaleString('defult',{
weekday:"long",
})