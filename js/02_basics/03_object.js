// sinngleton : it mean when it is created by constructor

// object literls

const mySym= Symbol("key1")
const jsUser ={
    name: "anmol",
    [mySym]:"mykey1",             // if you want to use symbol then []use this square bracket.
    age:12,
    location:"kashipur",
    email:"anmol@gmail.com",
    isloggedIn: false,
    lastloginDays:["mon","sat"]
}

console.log(jsUser.name);
console.log(jsUser["name","email"]);
console.log( typeof jsUser[mySym]);

jsUser.name="payal"
console.log(jsUser);


// Object.freeze(jsUser)     // it cannot be change after using the object.freeze. 
// jsUser.age=18
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello brother");
}


jsUser.greeting2=function(){
    console.log(`hello brother, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

